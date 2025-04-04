import React, { useState, useEffect } from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { AlertCircle, Plus, Save, Database, Edit2 } from 'lucide-react';

// Initial data from your paste
const initialGraphData = {
  "nodes": [
    { "id": "org-adports", "label": "AD Ports Group", "type": "Organization", "properties": {"group": "UAE Investor"} },
    { "id": "org-dpworld", "label": "DP World", "type": "Organization", "properties": {"group": "UAE Investor"} },
    { "id": "country-libya", "label": "Libya", "type": "Country" },
    { "id": "country-senegal", "label": "Senegal", "type": "Country" },
    { "id": "country-guinea", "label": "Guinea", "type": "Country" },
    { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
    { "id": "country-congo", "label": "Congo (Brazzaville)", "type": "Country" },
    { "id": "country-angola", "label": "Angola", "type": "Country" },
    { "id": "country-kenya", "label": "Kenya", "type": "Country" },
    { "id": "country-egypt", "label": "Egypt", "type": "Country" },
    { "id": "country-sudan", "label": "Sudan", "type": "Country" },
    { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
    { "id": "country-somalia", "label": "Somalia", "type": "Country" },
    { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
    { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
    { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
    { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
    { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
    { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
    { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
    { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
    { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
    { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
    { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
    { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
    { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
    // Other nodes from your data...
    { "id": "entity-ihc", "label": "IHC", "type": "Associated Entity" },
    { "id": "entity-irh", "label": "IRH", "type": "Associated Entity" },
    { "id": "sector-mining", "label": "Mining", "type": "Sector" },
  ],
  "edges": [
    { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
    { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
    { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
    // Other edges from your data...
    { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
    { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
    { "source": "sector-mining", "target": "country-kenya", "label": "Sector" },
  ]
};

const GraphManagerApp = () => {
  const [graphData, setGraphData] = useState(initialGraphData);
  const [activeTab, setActiveTab] = useState('viewer');
  
  // Node form state
  const [newNode, setNewNode] = useState({
    id: '',
    label: '',
    type: 'Organization',
    properties: {}
  });
  
  // Edge form state
  const [newEdge, setNewEdge] = useState({
    source: '',
    target: '',
    label: 'OPERATES_AT',
    properties: {}
  });
  
  // For property management
  const [propertyKey, setPropertyKey] = useState('');
  const [propertyValue, setPropertyValue] = useState('');
  const [nodeProperties, setNodeProperties] = useState({});
  const [edgeProperties, setEdgeProperties] = useState({});
  
  // Node type options
  const nodeTypes = ["Organization", "Country", "Location", "Associated Entity", "Sector"];
  
  // Edge label options
  const edgeLabels = ["OPERATES_AT", "LOCATED_IN", "Current Investments In", "Sector"];
  
  // Summary stats
  const [stats, setStats] = useState({});
  
  useEffect(() => {
    // Calculate summary statistics
    const nodeTypeCount = {};
    graphData.nodes.forEach(node => {
      nodeTypeCount[node.type] = (nodeTypeCount[node.type] || 0) + 1;
    });
    
    const edgeLabelCount = {};
    graphData.edges.forEach(edge => {
      edgeLabelCount[edge.label] = (edgeLabelCount[edge.label] || 0) + 1;
    });
    
    setStats({
      totalNodes: graphData.nodes.length,
      totalEdges: graphData.edges.length,
      nodeTypeCount,
      edgeLabelCount
    });
  }, [graphData]);
  
  // Add a node property
  const addNodeProperty = () => {
    if (propertyKey && propertyValue) {
      setNodeProperties({
        ...nodeProperties,
        [propertyKey]: propertyValue
      });
      setPropertyKey('');
      setPropertyValue('');
    }
  };
  
  // Add an edge property
  const addEdgeProperty = () => {
    if (propertyKey && propertyValue) {
      setEdgeProperties({
        ...edgeProperties,
        [propertyKey]: propertyValue
      });
      setPropertyKey('');
      setPropertyValue('');
    }
  };
  
  // Add a new node
  const addNode = () => {
    if (!newNode.id || !newNode.label) {
      alert('Node ID and Label are required!');
      return;
    }
    
    const nodeExists = graphData.nodes.some(node => node.id === newNode.id);
    if (nodeExists) {
      alert('A node with this ID already exists!');
      return;
    }
    
    const nodeToAdd = {
      ...newNode,
      properties: Object.keys(nodeProperties).length > 0 ? nodeProperties : undefined
    };
    
    setGraphData({
      ...graphData,
      nodes: [...graphData.nodes, nodeToAdd]
    });
    
    // Reset form
    setNewNode({
      id: '',
      label: '',
      type: 'Organization',
      properties: {}
    });
    setNodeProperties({});
  };
  
  // Add a new edge
  const addEdge = () => {
    if (!newEdge.source || !newEdge.target) {
      alert('Source and Target are required!');
      return;
    }
    
    const sourceExists = graphData.nodes.some(node => node.id === newEdge.source);
    const targetExists = graphData.nodes.some(node => node.id === newEdge.target);
    
    if (!sourceExists || !targetExists) {
      alert('Source or Target node does not exist!');
      return;
    }
    
    const edgeToAdd = {
      ...newEdge,
      properties: Object.keys(edgeProperties).length > 0 ? edgeProperties : undefined
    };
    
    setGraphData({
      ...graphData,
      edges: [...graphData.edges, edgeToAdd]
    });
    
    // Reset form
    setNewEdge({
      source: '',
      target: '',
      label: 'OPERATES_AT',
      properties: {}
    });
    setEdgeProperties({});
  };
  
  // Export data to JSON
  const exportToJson = () => {
    const jsonString = JSON.stringify(graphData, null, 2);
    const blob = new Blob([jsonString], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    
    const a = document.createElement('a');
    a.href = url;
    a.download = 'uae_africa_graph_data.json';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };
  
  return (
    <div className="p-4 max-w-6xl mx-auto">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">UAE-Africa Investment Graph Manager</h1>
        <p className="text-gray-600">Manage and visualize the network of UAE investments across Africa</p>
      </div>
      
      <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
        <TabsList className="mb-4">
          <TabsTrigger value="viewer">Data Viewer</TabsTrigger>
          <TabsTrigger value="add-node">Add Node</TabsTrigger>
          <TabsTrigger value="add-edge">Add Edge</TabsTrigger>
          <TabsTrigger value="summary">Summary</TabsTrigger>
        </TabsList>
        
        {/* Data Viewer Tab */}
        <TabsContent value="viewer" className="space-y-4">
          <div className="flex justify-between mb-4">
            <h2 className="text-xl font-semibold">Graph Data</h2>
            <Button onClick={exportToJson} className="flex items-center gap-2">
              <Save size={16} />
              Export to JSON
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Nodes Panel */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Database size={18} className="mr-2" />
                  Nodes ({graphData.nodes.length})
                </CardTitle>
                <CardDescription>All entities in the graph</CardDescription>
              </CardHeader>
              <CardContent className="max-h-96 overflow-y-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-medium text-gray-500 pb-2">ID</th>
                      <th className="text-left text-sm font-medium text-gray-500 pb-2">Label</th>
                      <th className="text-left text-sm font-medium text-gray-500 pb-2">Type</th>
                    </tr>
                  </thead>
                  <tbody>
                    {graphData.nodes.map((node) => (
                      <tr key={node.id} className="border-t border-gray-200">
                        <td className="py-2 text-sm">{node.id}</td>
                        <td className="py-2 text-sm">{node.label}</td>
                        <td className="py-2 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            node.type === 'Organization' ? 'bg-blue-100 text-blue-800' : 
                            node.type === 'Country' ? 'bg-green-100 text-green-800' :
                            node.type === 'Location' ? 'bg-orange-100 text-orange-800' :
                            node.type === 'Associated Entity' ? 'bg-purple-100 text-purple-800' :
                            'bg-teal-100 text-teal-800'
                          }`}>
                            {node.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
            
            {/* Edges Panel */}
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="flex items-center">
                  <Edit2 size={18} className="mr-2" />
                  Edges ({graphData.edges.length})
                </CardTitle>
                <CardDescription>All relationships in the graph</CardDescription>
              </CardHeader>
              <CardContent className="max-h-96 overflow-y-auto">
                <table className="w-full">
                  <thead>
                    <tr>
                      <th className="text-left text-sm font-medium text-gray-500 pb-2">Source</th>
                      <th className="text-left text-sm font-medium text-gray-500 pb-2">Relationship</th>
                      <th className="text-left text-sm font-medium text-gray-500 pb-2">Target</th>
                    </tr>
                  </thead>
                  <tbody>
                    {graphData.edges.map((edge, index) => (
                      <tr key={index} className="border-t border-gray-200">
                        <td className="py-2 text-sm">{edge.source}</td>
                        <td className="py-2 text-sm">
                          <span className={`px-2 py-1 rounded-full text-xs ${
                            edge.label === 'OPERATES_AT' ? 'bg-blue-100 text-blue-800' : 
                            edge.label === 'LOCATED_IN' ? 'bg-green-100 text-green-800' :
                            edge.label === 'Current Investments In' ? 'bg-purple-100 text-purple-800' :
                            'bg-teal-100 text-teal-800'
                          }`}>
                            {edge.label}
                          </span>
                        </td>
                        <td className="py-2 text-sm">{edge.target}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
        
        {/* Add Node Tab */}
        <TabsContent value="add-node">
          <Card>
            <CardHeader>
              <CardTitle>Add New Node</CardTitle>
              <CardDescription>Create a new entity in the graph</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Node ID*</label>
                  <input 
                    type="text" 
                    value={newNode.id} 
                    onChange={(e) => setNewNode({...newNode, id: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="e.g., country-nigeria"
                  />
                  <p className="mt-1 text-xs text-gray-500">Use format: type-name (e.g., org-newcompany)</p>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Node Label*</label>
                  <input 
                    type="text" 
                    value={newNode.label} 
                    onChange={(e) => setNewNode({...newNode, label: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                    placeholder="e.g., Nigeria"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Node Type</label>
                <select 
                  value={newNode.type} 
                  onChange={(e) => setNewNode({...newNode, type: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {nodeTypes.map(type => (
                    <option key={type} value={type}>{type}</option>
                  ))}
                </select>
              </div>
              
              <Separator />
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-700">Properties</h3>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={propertyKey} 
                      onChange={(e) => setPropertyKey(e.target.value)}
                      className="p-2 border border-gray-300 rounded-md"
                      placeholder="Key"
                    />
                    <input 
                      type="text" 
                      value={propertyValue} 
                      onChange={(e) => setPropertyValue(e.target.value)}
                      className="p-2 border border-gray-300 rounded-md"
                      placeholder="Value"
                    />
                    <Button onClick={addNodeProperty} size="sm">
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                
                {Object.keys(nodeProperties).length > 0 && (
                  <div className="border border-gray-200 rounded-md p-3 mt-2">
                    <ul className="space-y-1">
                      {Object.entries(nodeProperties).map(([key, value]) => (
                        <li key={key} className="text-sm">
                          <span className="font-medium">{key}:</span> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={addNode} className="w-full">Add Node</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Add Edge Tab */}
        <TabsContent value="add-edge">
          <Card>
            <CardHeader>
              <CardTitle>Add New Edge</CardTitle>
              <CardDescription>Create a new relationship between nodes</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Source Node*</label>
                  <select 
                    value={newEdge.source} 
                    onChange={(e) => setNewEdge({...newEdge, source: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select source node</option>
                    {graphData.nodes.map(node => (
                      <option key={node.id} value={node.id}>{node.label} ({node.id})</option>
                    ))}
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Target Node*</label>
                  <select 
                    value={newEdge.target} 
                    onChange={(e) => setNewEdge({...newEdge, target: e.target.value})}
                    className="w-full p-2 border border-gray-300 rounded-md"
                  >
                    <option value="">Select target node</option>
                    {graphData.nodes.map(node => (
                      <option key={node.id} value={node.id}>{node.label} ({node.id})</option>
                    ))}
                  </select>
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">Relationship Type</label>
                <select 
                  value={newEdge.label} 
                  onChange={(e) => setNewEdge({...newEdge, label: e.target.value})}
                  className="w-full p-2 border border-gray-300 rounded-md"
                >
                  {edgeLabels.map(label => (
                    <option key={label} value={label}>{label}</option>
                  ))}
                </select>
              </div>
              
              <Separator />
              
              <div>
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-sm font-medium text-gray-700">Properties</h3>
                  <div className="flex items-center gap-2">
                    <input 
                      type="text" 
                      value={propertyKey} 
                      onChange={(e) => setPropertyKey(e.target.value)}
                      className="p-2 border border-gray-300 rounded-md"
                      placeholder="Key"
                    />
                    <input 
                      type="text" 
                      value={propertyValue} 
                      onChange={(e) => setPropertyValue(e.target.value)}
                      className="p-2 border border-gray-300 rounded-md"
                      placeholder="Value"
                    />
                    <Button onClick={addEdgeProperty} size="sm">
                      <Plus size={16} />
                    </Button>
                  </div>
                </div>
                
                {Object.keys(edgeProperties).length > 0 && (
                  <div className="border border-gray-200 rounded-md p-3 mt-2">
                    <ul className="space-y-1">
                      {Object.entries(edgeProperties).map(([key, value]) => (
                        <li key={key} className="text-sm">
                          <span className="font-medium">{key}:</span> {value}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </CardContent>
            <CardFooter>
              <Button onClick={addEdge} className="w-full">Add Edge</Button>
            </CardFooter>
          </Card>
        </TabsContent>
        
        {/* Summary Tab */}
        <TabsContent value="summary">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Card>
              <CardHeader>
                <CardTitle>Graph Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="bg-blue-50 rounded-lg p-4">
                      <p className="text-sm text-blue-600 font-medium">Total Nodes</p>
                      <p className="text-3xl font-bold">{stats.totalNodes || 0}</p>
                    </div>
                    <div className="bg-green-50 rounded-lg p-4">
                      <p className="text-sm text-green-600 font-medium">Total Edges</p>
                      <p className="text-3xl font-bold">{stats.totalEdges || 0}</p>
                    </div>
                  </div>
                  
                  <div className="pt-2">
                    <h3 className="text-sm font-medium text-gray-700 mb-2">Nodes by Type</h3>
                    {stats.nodeTypeCount && Object.entries(stats.nodeTypeCount).map(([type, count]) => (
                      <div key={type} className="mb-2">
                        <div className="flex justify-between items-center mb-1">
                          <span className="text-sm">{type}</span>
                          <span className="text-sm font-medium">{count}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className={`h-2 rounded-full ${
                              type === 'Organization' ? 'bg-blue-500' : 
                              type === 'Country' ? 'bg-green-500' :
                              type === 'Location' ? 'bg-orange-500' :
                              type === 'Associated Entity' ? 'bg-purple-500' :
                              'bg-teal-500'
                            }`}
                            style={{width: `${(count / stats.totalNodes) * 100}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader>
                <CardTitle>Relationships</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="pt-2">
                  <h3 className="text-sm font-medium text-gray-700 mb-2">Edges by Type</h3>
                  {stats.edgeLabelCount && Object.entries(stats.edgeLabelCount).map(([label, count]) => (
                    <div key={label} className="mb-2">
                      <div className="flex justify-between items-center mb-1">
                        <span className="text-sm">{label}</span>
                        <span className="text-sm font-medium">{count}</span>
                      </div>
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className={`h-2 rounded-full ${
                            label === 'OPERATES_AT' ? 'bg-blue-500' : 
                            label === 'LOCATED_IN' ? 'bg-green-500' :
                            label === 'Current Investments In' ? 'bg-purple-500' :
                            'bg-teal-500'
                          }`}
                          style={{width: `${(count / stats.totalEdges) * 100}%`}}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mt-6 p-4 bg-yellow-50 rounded-md flex items-start">
                  <AlertCircle size={20} className="text-yellow-600 mr-2 mt-0.5" />
                  <div>
                    <h4 className="text-sm font-medium text-yellow-800">Usage Notes</h4>
                    <ul className="mt-1 text-sm text-yellow-700 list-disc pl-5">
                      <li>Node IDs should follow the format: type-name</li>
                      <li>Remember to add appropriate properties for each node type</li>
                      <li>Export your data regularly to avoid losing changes</li>
                    </ul>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default GraphManagerApp;