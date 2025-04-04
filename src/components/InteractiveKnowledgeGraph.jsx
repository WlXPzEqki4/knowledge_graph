// import React, { useState, useEffect } from 'react';
// import * as d3 from 'd3';

// // --- Define the Full Graph Data ---
// // In a real app, you might fetch this or import it
// const fullGraphData = {
//   "nodes": [
//     // --- Organizations ---
//     { "id": "org-adports", "label": "AD Ports Group", "type": "Organization", "properties": {"group": "UAE Investor"} },
//     { "id": "org-dpworld", "label": "DP World", "type": "Organization", "properties": {"group": "UAE Investor"} },

//     // --- Countries ---
//     { "id": "country-libya", "label": "Libya", "type": "Country" },
//     { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//     { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//     { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//     { "id": "country-congo", "label": "Congo (Brazzaville)", "type": "Country" },
//     { "id": "country-angola", "label": "Angola", "type": "Country" },
//     { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//     { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//     { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//     { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//     { "id": "country-somalia", "label": "Somalia", "type": "Country" }, // Added for Bosaso consistency
//     { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//     { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//     { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//     { "id": "country-southafrica", "label": "South Africa", "type": "Country" },

//     // --- Locations ---
//     // AD Ports Group Locations
//     { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     // DP World Locations
//     { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} }, // DP World link is primary based on full infographic
//     { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//     { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     // Other Logistics Locations
//     { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} }, // Port seems likely
//     { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} }
//   ],
//   "edges": [
//     // --- AD Ports Operations ---
//     { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     // --- DP World Operations ---
//     { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//     { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//     // --- Location to Country Links ---
//     { "source": "loc-djazair", "target": "country-libya", "label": "LOCATED_IN" },
//     { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//     { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//     { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//     { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//     { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//     { "source": "loc-banana", "target": "country-congo", "label": "LOCATED_IN" }, // Fixed target ID reference if needed
//     { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//     { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//     { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//     { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" }, // Linked to Somalia for KG consistency
//     { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//     { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//     { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//     { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//     { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" }
//   ]
// };


// const InteractiveKnowledgeGraph = () => {
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] });
//   const [simulation, setSimulation] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [highlightedNodes, setHighlightedNodes] = useState(new Set());
//   const [highlightedLinks, setHighlightedLinks] = useState(new Set());
//   const [showLegend, setShowLegend] = useState(true);

//   // Define color scale for node types (simplified based on new data)
//   const nodeColorScale = {
//     'Organization': '#4285F4',  // Blue
//     'Country': '#EA4335',       // Red
//     'Location': '#FBBC05'       // Yellow
//     // Keep old ones commented if needed for reference
//     // 'Actor': '#4285F4',
//     // 'GeoPolitical_Unit': '#EA4335',
//     // 'GeoSpatial_Point': '#FBBC05',
//   };

//   // Define line styles for edge types (keys match edge labels)
//   const edgeStyles = {
//     'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },
//     'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' }
//   };

//   useEffect(() => {
//     // Initialize graph data from the fullGraphData object
//     // Map edge 'label' to 'type' for consistency with original code structure
//     const nodes = fullGraphData.nodes;
//     const links = fullGraphData.edges.map(edge => ({
//       ...edge,
//       type: edge.label // Map label to type
//     }));

//     setGraphData({ nodes, links });
//   }, []); // Run only once on mount

//   useEffect(() => {
//     // Stop previous simulation if running
//     if (simulation) {
//         simulation.stop();
//     }

//     // Apply filters on node and edge types
//     let filteredNodes = [...graphData.nodes];
//     let filteredLinks = [...graphData.links];

//     // Filter by Node Type
//     if (selectedNodeType !== 'all') {
//       filteredNodes = graphData.nodes.filter(node =>
//         node.type === selectedNodeType // Simplified check
//       );
//       const nodeIds = new Set(filteredNodes.map(node => node.id));
//       // Keep links only if BOTH source and target nodes are in the filtered set
//       filteredLinks = graphData.links.filter(link => {
//          const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
//          const targetId = typeof link.target === 'object' ? link.target.id : link.target;
//          return nodeIds.has(sourceId) && nodeIds.has(targetId);
//       });
//     }

//     // Filter by Edge Type
//     if (selectedEdgeType !== 'all') {
//       filteredLinks = filteredLinks.filter(link => link.type === selectedEdgeType); // Uses 'type' (mapped from label)
//       const nodeIdsInLinks = new Set();
//       filteredLinks.forEach(link => {
//         nodeIdsInLinks.add(typeof link.source === 'object' ? link.source.id : link.source);
//         nodeIdsInLinks.add(typeof link.target === 'object' ? link.target.id : link.target);
//       });
//        // Keep nodes that are part of the filtered links
//       filteredNodes = filteredNodes.filter(node => nodeIdsInLinks.has(node.id));
//     }

//     // Apply search filter (only keep nodes matching search)
//     if (searchTerm) {
//       const lowercaseSearch = searchTerm.toLowerCase();
//       filteredNodes = filteredNodes.filter(node =>
//         node.label.toLowerCase().includes(lowercaseSearch) ||
//         node.type.toLowerCase().includes(lowercaseSearch) // Removed subtype check
//         // Add property search if needed:
//         // || (node.properties && Object.values(node.properties).some(val => String(val).toLowerCase().includes(lowercaseSearch)))
//       );
//       const nodeIds = new Set(filteredNodes.map(node => node.id));
//        // Keep links only if BOTH source and target nodes are in the search results
//       filteredLinks = filteredLinks.filter(link => {
//          const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
//          const targetId = typeof link.target === 'object' ? link.target.id : link.target;
//          return nodeIds.has(sourceId) && nodeIds.has(targetId);
//       });
//     }

//     // Only render if there are nodes to display
//     if (filteredNodes.length > 0) {
//         renderGraph(filteredNodes, filteredLinks);
//     } else {
//         // Clear the graph if no nodes match filters/search
//         d3.select('#graph-container').selectAll('*').remove();
//     }

//     // Cleanup function to stop simulation when component unmounts or before re-render
//     return () => {
//         if (simulation) {
//             simulation.stop();
//         }
//     };
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm]); // Rerun when data or filters change

//   const renderGraph = (nodes, links) => {
//     // Clear previous SVG content
//     d3.select('#graph-container').selectAll('*').remove();

//     const container = d3.select('#graph-container').node();
//     const width = container.clientWidth || 1000; // Use container width
//     const height = container.clientHeight || 600; // Use container height

//     // Create SVG container
//     const svg = d3.select('#graph-container')
//       .append('svg')
//       .attr('width', '100%') // Make SVG responsive
//       .attr('height', '100%')
//       .attr('viewBox', [0, 0, width, height]) // Maintain aspect ratio
//       .attr('preserveAspectRatio', 'xMidYMid meet')
//       .call(d3.zoom().scaleExtent([0.1, 8]).on('zoom', (event) => { // Set zoom extent
//         g.attr('transform', event.transform);
//       }));

//     const g = svg.append('g');

//     // Define arrow markers for links
//     svg.append('defs').append('marker')
//       .attr('id', 'arrowhead')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 25) // Adjusted for potential node size/stroke changes
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('d', 'M0,-5L10,0L0,5')
//       .attr('fill', '#999'); // Arrow color

//     // Initialize the links
//     const link = g.append('g')
//         .attr('class', 'links')
//         .selectAll('path')
//         .data(links)
//         .enter()
//         .append('path')
//         .attr('class', 'link')
//         .attr('stroke', d => edgeStyles[d.type]?.stroke || '#999') // Use mapped type, provide default
//         .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//         .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//         .attr('fill', 'none')
//         .attr('marker-end', 'url(#arrowhead)');

//     // Initialize the nodes group
//     const node = g.append('g')
//         .attr('class', 'nodes')
//         .selectAll('g')
//         .data(nodes, d => d.id) // Use key function for object constancy
//         .enter()
//         .append('g')
//         .attr('class', 'node')
//         .call(d3.drag()
//           .on('start', dragstarted)
//           .on('drag', dragged)
//           .on('end', dragended));

//     // Add circles for nodes
//     node.append('circle')
//       .attr('r', 10)
//       .attr('fill', d => nodeColorScale[d.type] || '#ccc') // Use type, provide default
//       .attr('stroke', '#fff')
//       .attr('stroke-width', 1.5);

//     // Add labels for nodes
//     node.append('text')
//       .attr('dx', 15)
//       .attr('dy', 4)
//       .text(d => d.label)
//       .style('font-size', '10px')
//       .style('font-family', 'sans-serif') // Use sans-serif
//       .attr('pointer-events', 'none'); // Prevent text from blocking mouse events on circle

//     // Add tooltips for nodes on hover
//     node.append('title')
//       .text(d => `${d.label}\nType: ${d.type}`); // Simplified tooltip

//     // Interaction for highlighting connected nodes
//     node.on('mouseover', (event, d) => {
//       const connectedNodes = new Set([d.id]);
//       const connectedLinks = new Set();

//       links.forEach(linkData => {
//         const sourceId = typeof linkData.source === 'object' ? linkData.source.id : linkData.source;
//         const targetId = typeof linkData.target === 'object' ? linkData.target.id : linkData.target;

//         if (sourceId === d.id || targetId === d.id) {
//           connectedLinks.add(linkData);
//           connectedNodes.add(sourceId);
//           connectedNodes.add(targetId);
//         }
//       });

//       setHighlightedNodes(connectedNodes); // Store highlighted state if needed elsewhere
//       setHighlightedLinks(connectedLinks); // Store highlighted state if needed elsewhere

//       // Apply visual highlights directly
//       node.attr('opacity', nodeData => connectedNodes.has(nodeData.id) ? 1 : 0.2);
//       link.attr('opacity', linkData => {
//           // Check if the link itself is in the connectedLinks set
//           return connectedLinks.has(linkData) ? 1 : 0.1;
//        });
//        // Dim link labels as well (optional)
//       g.selectAll('.link-label').attr('opacity', linkLabelData => connectedLinks.has(linkLabelData) ? 1 : 0.1);


//     })
//     .on('mouseout', () => {
//       setHighlightedNodes(new Set());
//       setHighlightedLinks(new Set());

//       // Reset visual state
//       node.attr('opacity', 1);
//       link.attr('opacity', 1);
//       g.selectAll('.link-label').attr('opacity', 1); // Reset link label opacity
//     });

//     // Add link labels (rendered after nodes/links for better visibility control)
//     const linkLabel = g.append('g')
//       .attr('class', 'link-labels')
//       .selectAll('text')
//       .data(links)
//       .enter()
//       .append('text')
//       .attr('class', 'link-label')
//       .attr('dy', -5) // Position above the link line center
//       .style('font-size', '8px')
//       .style('font-family', 'sans-serif')
//       .style('text-anchor', 'middle')
//       .attr('pointer-events', 'none') // Prevent labels from interfering with mouse events
//       .text(d => d.type); // Use the mapped 'type'

//     // Create simulation
//     const newSimulation = d3.forceSimulation(nodes)
//       .force('link', d3.forceLink(links).id(d => d.id).distance(120).strength(0.5)) // Adjust distance/strength
//       .force('charge', d3.forceManyBody().strength(-400)) // Increase repulsion
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(25)) // Increase collision radius
//       .on('tick', ticked); // Use 'ticked' convention

//     setSimulation(newSimulation); // Store the simulation instance

//     function ticked() {
//       // Update link paths
//       link.attr('d', d => {
//         // Simple straight line for now, arc calculation can be added if needed
//         // Ensure source and target have coordinates (might not initially)
//          if (!d.source.x || !d.target.x) return "M0,0L0,0"; // Avoid errors on initial ticks

//          // Offset start and end points slightly from node center for arrows
//          const dx = d.target.x - d.source.x;
//          const dy = d.target.y - d.source.y;
//          const gamma = Math.atan2(dy, dx); // Angle of the link
//          const nodeRadius = 10; // Match circle radius
//          const arrowOffset = 8; // Approximate length of arrowhead + clearance

//          const sourceX = d.source.x + Math.cos(gamma) * (nodeRadius + 1.5); // + stroke/2
//          const sourceY = d.source.y + Math.sin(gamma) * (nodeRadius + 1.5);
//          const targetX = d.target.x - Math.cos(gamma) * (nodeRadius + 1.5 + arrowOffset);
//          const targetY = d.target.y - Math.sin(gamma) * (nodeRadius + 1.5 + arrowOffset);

//         return `M${sourceX},${sourceY}L${targetX},${targetY}`;
//       });

//       // Update node positions
//       node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`); // Handle potential undefined coords initially

//       // Update link label positions
//       linkLabel
//         .attr('x', d => (d.source.x + d.target.x) / 2)
//         .attr('y', d => (d.source.y + d.target.y) / 2);
//          // Optional: Rotate label with link (more complex)
//          // .attr('transform', d => {
//          //    const angle = Math.atan2(d.target.y - d.source.y, d.target.x - d.source.x) * (180 / Math.PI);
//          //    const cx = (d.source.x + d.target.x) / 2;
//          //    const cy = (d.source.y + d.target.y) / 2;
//          //    return `rotate(${angle}, ${cx}, ${cy}) translate(${cx}, ${cy})`;
//          // });
//     }

//     function dragstarted(event, d) {
//       if (!event.active) newSimulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }

//     function dragended(event, d) {
//       if (!event.active) newSimulation.alphaTarget(0);
//       // Only nullify fx/fy if you want the node to be repositioned by simulation after drag
//       // Keep fx/fy if you want the node to stay where the user dragged it
//       // d.fx = null;
//       // d.fy = null;
//     }
//   };

//   // Node type options for filter (simplified)
//   const nodeTypeOptions = [
//     { value: 'all', label: 'All Node Types' },
//     { value: 'Organization', label: 'Organization' },
//     { value: 'Country', label: 'Country' },
//     { value: 'Location', label: 'Location' }
//   ];

//   // Edge type options for filter (matches edge labels/types)
//   const edgeTypeOptions = [
//     { value: 'all', label: 'All Relationship Types' },
//     { value: 'OPERATES_AT', label: 'OPERATES_AT' },
//     { value: 'LOCATED_IN', label: 'LOCATED_IN' }
//   ];

//   return (
//     // Using Tailwind CSS classes assumed to be available
//     <div className="flex flex-col h-screen"> {/* Use full screen height */}
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10"> {/* Smaller padding, add shadow */}
//         <h1 className="text-xl font-semibold mb-3">UAE-Africa Ports & Logistics Knowledge Graph</h1>

//         <div className="flex flex-wrap items-end gap-x-4 gap-y-2"> {/* Adjust gaps */}
//           {/* Node Type Filter */}
//           <div>
//             <label htmlFor="node-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label>
//             <select
//               id="node-type-filter"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" // Smaller control
//               value={selectedNodeType}
//               onChange={e => setSelectedNodeType(e.target.value)}
//             >
//               {nodeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           {/* Edge Type Filter */}
//           <div>
//             <label htmlFor="edge-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label>
//             <select
//               id="edge-type-filter"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={selectedEdgeType}
//               onChange={e => setSelectedEdgeType(e.target.value)}
//             >
//               {edgeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           {/* Search Input */}
//           <div>
//             <label htmlFor="search-input" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes</label>
//             <input
//               id="search-input"
//               type="text"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//               placeholder="Name or type..."
//             />
//           </div>

//           {/* Reset Button */}
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-sm shadow-sm"
//             onClick={() => {
//               setSelectedNodeType('all');
//               setSelectedEdgeType('all');
//               setSearchTerm('');
//             }}
//           >
//             Reset
//           </button>

//           {/* Toggle Legend Button */}
//           <button
//             className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm"
//             onClick={() => setShowLegend(!showLegend)}
//           >
//             {showLegend ? 'Hide Legend' : 'Show Legend'}
//           </button>
//         </div>

//         {/* Legend */}
//         {showLegend && (
//           <div className="bg-white p-3 rounded border mt-3 text-xs shadow"> {/* Smaller legend */}
//             <h3 className="font-semibold mb-2 text-sm">Legend</h3>

//             {/* Node Types */}
//             <div className="mb-2">
//               <h4 className="font-medium mb-1">Node Types</h4>
//               <div className="flex flex-wrap gap-x-4 gap-y-1">
//                 {Object.entries(nodeColorScale).map(([type, color]) => (
//                    <div key={type} className="flex items-center">
//                      <div className="w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: color }}></div>
//                      <span>{type}</span>
//                    </div>
//                 ))}
//               </div>
//             </div>

//             {/* Edge Types */}
//             <div>
//               <h4 className="font-medium mb-1">Relationship Types</h4>
//               <div className="flex flex-wrap gap-x-4 gap-y-2">
//                 {Object.entries(edgeStyles).map(([type, style]) => (
//                    <div key={type} className="flex items-center">
//                      <svg width="30" height="8" className="mr-1.5"> {/* Smaller legend line */}
//                        <line x1="0" y1="4" x2="30" y2="4" stroke={style.stroke} strokeWidth={style.strokeWidth} strokeDasharray={style.dasharray}/>
//                        <polygon points="30,4 25,2 25,6" fill={style.stroke} /> {/* Adjusted arrow */}
//                      </svg>
//                      <span>{type}</span>
//                    </div>
//                 ))}
//               </div>
//             </div>

//             <div className="mt-3 text-gray-500">
//               <p>Hover nodes to highlight. Drag nodes to move. Scroll/pinch to zoom.</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Graph Container */}
//       <div className="flex-grow bg-white border-t border-gray-200 overflow-hidden" > {/* Take remaining height, add top border */}
//         {/* Ensure container has size */}
//         <div id="graph-container" className="w-full h-full">
//             {/* SVG will be appended here by D3 */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;




































// import React, { useState, useEffect } from 'react';
// import * as d3 from 'd3';

// // --- Define the Focused Graph Data (Kenya Example) ---
// // Start with Kenya, IHC, IRH, Mining and new relationships
// const fullGraphData = {
//   "nodes": [
//     // --- Country ---
//     { "id": "country-kenya", "label": "Kenya", "type": "Country" },

//     // --- Associated Entities ---
//     { "id": "entity-ihc", "label": "IHC", "type": "Associated Entity" },
//     { "id": "entity-irh", "label": "IRH", "type": "Associated Entity" },

//     // --- Sector ---
//     { "id": "sector-mining", "label": "Mining", "type": "Sector" },

//     // --- Original Nodes (Commented out for now) ---
//     // { "id": "org-adports", "label": "AD Ports Group", "type": "Organization", "properties": {"group": "UAE Investor"} },
//     // { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     // ... other original nodes
//   ],
//   "edges": [
//     // --- New Relationships for Kenya ---
//     { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//     { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//     { "source": "sector-mining", "target": "country-kenya", "label": "Sector" }, // As requested: Mining -> Kenya edge labelled 'Sector'

//     // --- Original Edges (Commented out for now) ---
//     // { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     // { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//     // ... other original edges
//   ]
// };


// const InteractiveKnowledgeGraph = () => {
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] });
//   const [simulation, setSimulation] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   // highlightedNodes/Links state is kept but visual update is direct in D3 event handlers
//   const [, setHighlightedNodes] = useState(new Set());
//   const [, setHighlightedLinks] = useState(new Set());
//   const [showLegend, setShowLegend] = useState(true);

//   // Define color scale for node types (including new types)
//   const nodeColorScale = {
//     'Organization': '#4285F4',       // Blue (Kept for potential re-integration)
//     'Country': '#EA4335',            // Red
//     'Location': '#FBBC05',           // Yellow (Kept for potential re-integration)
//     'Associated Entity': '#34A853',  // Green (New)
//     'Sector': '#F4B400',             // Orange (New) - Slightly different from Location Yellow
//   };

//   // Define line styles for edge types (including new types)
//   const edgeStyles = {
//     'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },            // Kept for potential re-integration
//     'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },          // Kept for potential re-integration
//     'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' }, // Dashed blue (New)
//     'Sector': { stroke: '#B36F00', strokeWidth: 1, dasharray: '2,2' },           // Dotted darker orange/brown (New)
//   };

//   useEffect(() => {
//     // Initialize graph data from the fullGraphData object
//     // Map edge 'label' to 'type' for consistency
//     const nodes = fullGraphData.nodes;
//     const links = fullGraphData.edges.map(edge => ({
//       ...edge,
//       type: edge.label // Map label to type
//     }));

//     setGraphData({ nodes, links });
//   }, []); // Run only once on mount

//   useEffect(() => {
//     // Stop previous simulation if running
//     if (simulation) {
//         simulation.stop();
//     }

//     // Apply filters on node and edge types
//     let filteredNodes = [...graphData.nodes];
//     let filteredLinks = [...graphData.links];

//     // Filter by Node Type
//     if (selectedNodeType !== 'all') {
//       filteredNodes = graphData.nodes.filter(node =>
//         node.type === selectedNodeType
//       );
//       const nodeIds = new Set(filteredNodes.map(node => node.id));
//       filteredLinks = graphData.links.filter(link => {
//          const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
//          const targetId = typeof link.target === 'object' ? link.target.id : link.target;
//          return nodeIds.has(sourceId) && nodeIds.has(targetId);
//       });
//     }

//     // Filter by Edge Type
//     if (selectedEdgeType !== 'all') {
//       filteredLinks = filteredLinks.filter(link => link.type === selectedEdgeType);
//       const nodeIdsInLinks = new Set();
//       filteredLinks.forEach(link => {
//         nodeIdsInLinks.add(typeof link.source === 'object' ? link.source.id : link.source);
//         nodeIdsInLinks.add(typeof link.target === 'object' ? link.target.id : link.target);
//       });
//       filteredNodes = filteredNodes.filter(node => nodeIdsInLinks.has(node.id));
//     }

//     // Apply search filter
//     if (searchTerm) {
//       const lowercaseSearch = searchTerm.toLowerCase();
//       filteredNodes = filteredNodes.filter(node =>
//         node.label.toLowerCase().includes(lowercaseSearch) ||
//         node.type.toLowerCase().includes(lowercaseSearch)
//       );
//       const nodeIds = new Set(filteredNodes.map(node => node.id));
//       filteredLinks = filteredLinks.filter(link => {
//          const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
//          const targetId = typeof link.target === 'object' ? link.target.id : link.target;
//          return nodeIds.has(sourceId) && nodeIds.has(targetId);
//       });
//     }

//     // Only render if there are nodes to display
//     if (filteredNodes.length > 0) {
//         renderGraph(filteredNodes, filteredLinks);
//     } else {
//         d3.select('#graph-container').selectAll('*').remove();
//     }

//     // Cleanup function
//     return () => {
//         if (simulation) {
//             simulation.stop();
//         }
//     };
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm]);

//   const renderGraph = (nodes, links) => {
//     d3.select('#graph-container').selectAll('*').remove();

//     const container = d3.select('#graph-container').node();
//     const width = container.clientWidth || 1000;
//     const height = container.clientHeight || 600;

//     const svg = d3.select('#graph-container')
//       .append('svg')
//       .attr('width', '100%')
//       .attr('height', '100%')
//       .attr('viewBox', [0, 0, width, height])
//       .attr('preserveAspectRatio', 'xMidYMid meet')
//       .call(d3.zoom().scaleExtent([0.1, 8]).on('zoom', (event) => {
//         g.attr('transform', event.transform);
//       }));

//     const g = svg.append('g');

//     // Define arrow markers for links - using a generic grey arrow for all
//     svg.append('defs').append('marker')
//       .attr('id', 'arrowhead')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 25)
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('d', 'M0,-5L10,0L0,5')
//       .attr('fill', '#999'); // Generic arrow color

//     // Initialize the links
//     const link = g.append('g')
//         .attr('class', 'links')
//         .selectAll('path')
//         .data(links)
//         .enter()
//         .append('path')
//         .attr('class', 'link')
//         // Use optional chaining and default values for robustness
//         .attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//         .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//         .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//         .attr('fill', 'none')
//         .attr('marker-end', 'url(#arrowhead)'); // Apply marker to all links

//     // Initialize the nodes group
//     const node = g.append('g')
//         .attr('class', 'nodes')
//         .selectAll('g')
//         .data(nodes, d => d.id) // Key function
//         .enter()
//         .append('g')
//         .attr('class', 'node')
//         .call(d3.drag()
//           .on('start', dragstarted)
//           .on('drag', dragged)
//           .on('end', dragended));

//     // Add circles for nodes
//     node.append('circle')
//       .attr('r', 12) // Slightly larger radius might be nice
//       .attr('fill', d => nodeColorScale[d.type] || '#ccc') // Default color
//       .attr('stroke', '#fff')
//       .attr('stroke-width', 1.5);

//     // Add labels for nodes
//     node.append('text')
//       .attr('dx', 18) // Adjust based on radius
//       .attr('dy', 5)  // Adjust based on radius/font size
//       .text(d => d.label)
//       .style('font-size', '11px') // Slightly larger font
//       .style('font-family', 'sans-serif')
//       .attr('pointer-events', 'none');

//     // Add tooltips for nodes on hover
//     node.append('title')
//       .text(d => `${d.label}\nType: ${d.type}`);

//     // Interaction for highlighting connected nodes
//     node.on('mouseover', (event, d) => {
//       const connectedNodes = new Set([d.id]);
//       const connectedLinks = new Set();

//       links.forEach(linkData => {
//         const sourceId = typeof linkData.source === 'object' ? linkData.source.id : linkData.source;
//         const targetId = typeof linkData.target === 'object' ? linkData.target.id : linkData.target;

//         if (sourceId === d.id || targetId === d.id) {
//           connectedLinks.add(linkData);
//           connectedNodes.add(sourceId);
//           connectedNodes.add(targetId);
//         }
//       });

//       setHighlightedNodes(connectedNodes);
//       setHighlightedLinks(connectedLinks);

//       node.attr('opacity', nodeData => connectedNodes.has(nodeData.id) ? 1 : 0.15); // More pronounced dimming
//       link.attr('opacity', linkData => connectedLinks.has(linkData) ? 1 : 0.1);
//       g.selectAll('.link-label').attr('opacity', linkLabelData => connectedLinks.has(linkLabelData) ? 1 : 0.1);

//     })
//     .on('mouseout', () => {
//       setHighlightedNodes(new Set());
//       setHighlightedLinks(new Set());

//       node.attr('opacity', 1);
//       link.attr('opacity', 1);
//       g.selectAll('.link-label').attr('opacity', 1);
//     });

//     // Add link labels
//     const linkLabel = g.append('g')
//       .attr('class', 'link-labels')
//       .selectAll('text')
//       .data(links)
//       .enter()
//       .append('text')
//       .attr('class', 'link-label')
//       .attr('dy', -5)
//       .style('font-size', '9px') // Slightly larger link label
//       .style('font-family', 'sans-serif')
//       .style('text-anchor', 'middle')
//       .attr('pointer-events', 'none')
//       .text(d => d.type); // Display the relationship type

//     // Create simulation
//     const newSimulation = d3.forceSimulation(nodes)
//       .force('link', d3.forceLink(links).id(d => d.id).distance(150).strength(0.6)) // Increase distance slightly
//       .force('charge', d3.forceManyBody().strength(-500)) // Stronger repulsion
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(30)) // Increase collision radius based on node size+label
//       .on('tick', ticked);

//     setSimulation(newSimulation);

//     function ticked() {
//       link.attr('d', d => {
//          if (!d.source.x || !d.target.x) return "M0,0L0,0";

//          const dx = d.target.x - d.source.x;
//          const dy = d.target.y - d.source.y;
//          const gamma = Math.atan2(dy, dx);
//          const nodeRadius = 12; // Match circle radius
//          const arrowOffset = 8;

//          const sourceX = d.source.x + Math.cos(gamma) * (nodeRadius + 1.5);
//          const sourceY = d.source.y + Math.sin(gamma) * (nodeRadius + 1.5);
//          const targetX = d.target.x - Math.cos(gamma) * (nodeRadius + 1.5 + arrowOffset);
//          const targetY = d.target.y - Math.sin(gamma) * (nodeRadius + 1.5 + arrowOffset);

//         // Check for NaNs or zero length lines which can break rendering
//         if (isNaN(sourceX) || isNaN(sourceY) || isNaN(targetX) || isNaN(targetY) || (sourceX === targetX && sourceY === targetY)) {
//              return "M0,0"; // Return a valid but invisible path
//          }

//         return `M${sourceX},${sourceY}L${targetX},${targetY}`;
//       });

//       node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);

//       linkLabel
//         .attr('x', d => (d.source.x + d.target.x) / 2)
//         .attr('y', d => (d.source.y + d.target.y) / 2);
//     }

//     function dragstarted(event, d) {
//       if (!event.active) newSimulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }

//     function dragended(event, d) {
//       if (!event.active) newSimulation.alphaTarget(0);
//        // Keep node fixed where dragged
//       // d.fx = null;
//       // d.fy = null;
//     }
//   };

//   // Node type options for filter (including new types)
//   const nodeTypeOptions = [
//     { value: 'all', label: 'All Node Types' },
//     { value: 'Organization', label: 'Organization' }, // Kept
//     { value: 'Country', label: 'Country' },
//     { value: 'Location', label: 'Location' },       // Kept
//     { value: 'Associated Entity', label: 'Associated Entity' }, // New
//     { value: 'Sector', label: 'Sector' },             // New
//   ];

//   // Edge type options for filter (including new types)
//   const edgeTypeOptions = [
//     { value: 'all', label: 'All Relationship Types' },
//     { value: 'OPERATES_AT', label: 'OPERATES_AT' }, // Kept
//     { value: 'LOCATED_IN', label: 'LOCATED_IN' },   // Kept
//     { value: 'Current Investments In', label: 'Current Investments In' }, // New
//     { value: 'Sector', label: 'Sector' },             // New
//   ];

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10">
//         <h1 className="text-xl font-semibold mb-3">Interactive Knowledge Graph</h1> {/* Generic Title */}

//         <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
//           {/* Node Type Filter */}
//           <div>
//             <label htmlFor="node-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label>
//             <select
//               id="node-type-filter"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={selectedNodeType}
//               onChange={e => setSelectedNodeType(e.target.value)}
//             >
//               {nodeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           {/* Edge Type Filter */}
//           <div>
//             <label htmlFor="edge-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label>
//             <select
//               id="edge-type-filter"
//               className="w-52 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500" // Wider for longer labels
//               value={selectedEdgeType}
//               onChange={e => setSelectedEdgeType(e.target.value)}
//             >
//               {edgeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           {/* Search Input */}
//           <div>
//             <label htmlFor="search-input" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes</label>
//             <input
//               id="search-input"
//               type="text"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//               placeholder="Name or type..."
//             />
//           </div>

//           {/* Reset Button */}
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-sm shadow-sm"
//             onClick={() => {
//               setSelectedNodeType('all');
//               setSelectedEdgeType('all');
//               setSearchTerm('');
//             }}
//           >
//             Reset
//           </button>

//           {/* Toggle Legend Button */}
//           <button
//             className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm"
//             onClick={() => setShowLegend(!showLegend)}
//           >
//             {showLegend ? 'Hide Legend' : 'Show Legend'}
//           </button>
//         </div>

//         {/* Legend */}
//         {showLegend && (
//           <div className="bg-white p-3 rounded border mt-3 text-xs shadow">
//             <h3 className="font-semibold mb-2 text-sm">Legend</h3>

//             {/* Node Types */}
//             <div className="mb-2">
//               <h4 className="font-medium mb-1">Node Types</h4>
//               <div className="flex flex-wrap gap-x-4 gap-y-1">
//                 {/* Dynamically generate node legend entries */}
//                 {nodeTypeOptions.filter(opt => opt.value !== 'all').map(opt => (
//                   <div key={opt.value} className="flex items-center">
//                     <div className="w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: nodeColorScale[opt.value] || '#ccc' }}></div>
//                     <span>{opt.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Edge Types */}
//             <div>
//               <h4 className="font-medium mb-1">Relationship Types</h4>
//               <div className="flex flex-wrap gap-x-4 gap-y-2">
//                  {/* Dynamically generate edge legend entries */}
//                  {edgeTypeOptions.filter(opt => opt.value !== 'all').map(opt => {
//                     const style = edgeStyles[opt.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' };
//                     return (
//                         <div key={opt.value} className="flex items-center">
//                          <svg width="30" height="8" className="mr-1.5">
//                            <line x1="0" y1="4" x2="30" y2="4" stroke={style.stroke} strokeWidth={style.strokeWidth} strokeDasharray={style.dasharray}/>
//                            <polygon points="30,4 25,2 25,6" fill={style.stroke} />
//                          </svg>
//                          <span>{opt.label}</span>
//                        </div>
//                     );
//                  })}
//               </div>
//             </div>

//             <div className="mt-3 text-gray-500">
//               <p>Hover nodes to highlight. Drag nodes to move. Scroll/pinch to zoom.</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Graph Container */}
//       <div className="flex-grow bg-gray-50 border-t border-gray-200 overflow-hidden" > {/* Lighter bg */}
//         <div id="graph-container" className="w-full h-full">
//             {/* SVG appended here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;
























// import React, { useState, useEffect } from 'react';
// import * as d3 from 'd3';

// // --- Define the Combined Graph Data ---
// const fullGraphData = {
//   "nodes": [
//     // --- Organizations ---
//     { "id": "org-adports", "label": "AD Ports Group", "type": "Organization", "properties": {"group": "UAE Investor"} },
//     { "id": "org-dpworld", "label": "DP World", "type": "Organization", "properties": {"group": "UAE Investor"} },

//     // --- Countries ---
//     { "id": "country-libya", "label": "Libya", "type": "Country" },
//     { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//     { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//     { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//     { "id": "country-congo", "label": "Congo (Brazzaville)", "type": "Country" },
//     { "id": "country-angola", "label": "Angola", "type": "Country" },
//     { "id": "country-kenya", "label": "Kenya", "type": "Country" }, // Exists
//     { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//     { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//     { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//     { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//     { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//     { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//     { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//     { "id": "country-southafrica", "label": "South Africa", "type": "Country" },

//     // --- Locations ---
//     // AD Ports Group Locations
//     { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//     { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} }, // In Kenya
//     // DP World Locations
//     { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//     { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//     { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//     // Other Logistics Locations
//     { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//     { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },

//     // --- Associated Entities (NEW) ---
//     { "id": "entity-ihc", "label": "IHC", "type": "Associated Entity" },
//     { "id": "entity-irh", "label": "IRH", "type": "Associated Entity" },

//     // --- Sector (NEW) ---
//     { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//   ],
//   "edges": [
//     // --- AD Ports Operations ---
//     { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} }, // Lamu in Kenya
//     // --- DP World Operations ---
//     { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//     { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//     { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//     // --- Location to Country Links ---
//     { "source": "loc-djazair", "target": "country-libya", "label": "LOCATED_IN" },
//     { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//     { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//     { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//     { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//     { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//     { "source": "loc-banana", "target": "country-congo", "label": "LOCATED_IN" },
//     { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//     { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" }, // Lamu in Kenya
//     { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//     { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//     { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//     { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//     { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//     { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//     { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//     { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },

//     // --- New Relationships for Kenya (NEW) ---
//     { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//     { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//     { "source": "sector-mining", "target": "country-kenya", "label": "Sector" },

//     // --- New Relationships for Tanzania (NEW) ---
//     { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//     { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//     { "source": "sector-mining", "target": "country-tanzania", "label": "Sector" },

//     // --- New Relationships for Angola (NEW) ---
//     { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//     { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },
//     { "source": "sector-mining", "target": "country-angola", "label": "Sector" },







//   ]
// };


// const InteractiveKnowledgeGraph = () => {
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] });
//   const [simulation, setSimulation] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [, setHighlightedNodes] = useState(new Set());
//   const [, setHighlightedLinks] = useState(new Set());
//   const [showLegend, setShowLegend] = useState(true);

//   // Define color scale for ALL node types
//   const nodeColorScale = {
//     'Organization': '#4285F4',       // Blue
//     'Country': '#EA4335',            // Red
//     'Location': '#FBBC05',           // Yellow
//     'Associated Entity': '#34A853',  // Green
//     'Sector': '#F4B400',             // Orange/Brown
//   };

//   // Define line styles for ALL edge types
//   const edgeStyles = {
//     'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },      // Solid grey
//     'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },    // Solid red
//     'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' }, // Dashed blue
//     'Sector': { stroke: '#B36F00', strokeWidth: 1, dasharray: '2,2' },     // Dotted darker orange/brown
//   };

//   useEffect(() => {
//     // Initialize graph data from the combined fullGraphData
//     const nodes = fullGraphData.nodes;
//     const links = fullGraphData.edges.map(edge => ({
//       ...edge,
//       type: edge.label // Map label to type
//     }));

//     setGraphData({ nodes, links });
//   }, []); // Run only once on mount

//   useEffect(() => {
//     if (simulation) {
//         simulation.stop();
//     }

//     let filteredNodes = [...graphData.nodes];
//     let filteredLinks = [...graphData.links];

//     // Filter by Node Type
//     if (selectedNodeType !== 'all') {
//       filteredNodes = graphData.nodes.filter(node => node.type === selectedNodeType);
//       const nodeIds = new Set(filteredNodes.map(node => node.id));
//       filteredLinks = graphData.links.filter(link => {
//          const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
//          const targetId = typeof link.target === 'object' ? link.target.id : link.target;
//          return nodeIds.has(sourceId) && nodeIds.has(targetId);
//       });
//     }

//     // Filter by Edge Type
//     if (selectedEdgeType !== 'all') {
//       filteredLinks = filteredLinks.filter(link => link.type === selectedEdgeType);
//       const nodeIdsInLinks = new Set();
//       filteredLinks.forEach(link => {
//         nodeIdsInLinks.add(typeof link.source === 'object' ? link.source.id : link.source);
//         nodeIdsInLinks.add(typeof link.target === 'object' ? link.target.id : link.target);
//       });
//       filteredNodes = filteredNodes.filter(node => nodeIdsInLinks.has(node.id));
//     }

//     // Apply search filter
//     if (searchTerm) {
//       const lowercaseSearch = searchTerm.toLowerCase();
//       filteredNodes = filteredNodes.filter(node =>
//         node.label.toLowerCase().includes(lowercaseSearch) ||
//         node.type.toLowerCase().includes(lowercaseSearch)
//       );
//       const nodeIds = new Set(filteredNodes.map(node => node.id));
//       filteredLinks = filteredLinks.filter(link => {
//          const sourceId = typeof link.source === 'object' ? link.source.id : link.source;
//          const targetId = typeof link.target === 'object' ? link.target.id : link.target;
//          return nodeIds.has(sourceId) && nodeIds.has(targetId);
//       });
//     }

//     if (filteredNodes.length > 0) {
//         renderGraph(filteredNodes, filteredLinks);
//     } else {
//         d3.select('#graph-container').selectAll('*').remove();
//     }

//     return () => {
//         if (simulation) {
//             simulation.stop();
//         }
//     };
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm]);

//   const renderGraph = (nodes, links) => {
//     d3.select('#graph-container').selectAll('*').remove();

//     const container = d3.select('#graph-container').node();
//     const width = container?.clientWidth || 1000;
//     const height = container?.clientHeight || 700; // Increased height for potentially larger graph

//     const svg = d3.select('#graph-container')
//       .append('svg')
//       .attr('width', '100%')
//       .attr('height', '100%')
//       .attr('viewBox', [0, 0, width, height])
//       .attr('preserveAspectRatio', 'xMidYMid meet')
//       .call(d3.zoom().scaleExtent([0.1, 8]).on('zoom', (event) => {
//         g.attr('transform', event.transform);
//       }));

//     const g = svg.append('g');

//     svg.append('defs').append('marker')
//       .attr('id', 'arrowhead')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 25) // Adjust based on node radius + desired offset
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('d', 'M0,-5L10,0L0,5')
//       .attr('fill', '#999');

//     const link = g.append('g')
//         .attr('class', 'links')
//         .selectAll('path')
//         .data(links)
//         .enter()
//         .append('path')
//         .attr('class', 'link')
//         .attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//         .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//         .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//         .attr('fill', 'none')
//         .attr('marker-end', 'url(#arrowhead)');

//     const node = g.append('g')
//         .attr('class', 'nodes')
//         .selectAll('g')
//         .data(nodes, d => d.id)
//         .enter()
//         .append('g')
//         .attr('class', 'node')
//         .call(d3.drag()
//           .on('start', dragstarted)
//           .on('drag', dragged)
//           .on('end', dragended));

//     node.append('circle')
//       .attr('r', 12)
//       .attr('fill', d => nodeColorScale[d.type] || '#ccc')
//       .attr('stroke', '#fff')
//       .attr('stroke-width', 1.5);

//     node.append('text')
//       .attr('dx', 18)
//       .attr('dy', 5)
//       .text(d => d.label)
//       .style('font-size', '11px')
//       .style('font-family', 'sans-serif')
//       .attr('pointer-events', 'none');

//     node.append('title')
//       .text(d => {
//           let tooltip = `${d.label}\nType: ${d.type}`;
//           if (d.properties) {
//               tooltip += `\n${Object.entries(d.properties).map(([key, value]) => `${key}: ${value}`).join('\n')}`;
//           }
//           return tooltip;
//       }); // Show properties in tooltip if they exist


//     node.on('mouseover', (event, d) => {
//       const connectedNodes = new Set([d.id]);
//       const connectedLinks = new Set();

//       // Use the *currently rendered* links for highlighting logic
//       const currentLinks = g.selectAll('.link').data();

//       currentLinks.forEach(linkData => {
//         // D3 might store source/target as objects after simulation starts
//         const sourceId = typeof linkData.source === 'object' ? linkData.source.id : linkData.source;
//         const targetId = typeof linkData.target === 'object' ? linkData.target.id : linkData.target;

//         if (sourceId === d.id || targetId === d.id) {
//           connectedLinks.add(linkData);
//           connectedNodes.add(sourceId);
//           connectedNodes.add(targetId);
//         }
//       });

//       setHighlightedNodes(connectedNodes); // Update state (optional use)
//       setHighlightedLinks(connectedLinks);   // Update state (optional use)

//       node.attr('opacity', nodeData => connectedNodes.has(nodeData.id) ? 1 : 0.15);
//       link.attr('opacity', linkData => connectedLinks.has(linkData) ? 1 : 0.1);
//       g.selectAll('.link-label').attr('opacity', linkLabelData => connectedLinks.has(linkLabelData) ? 1 : 0.1);

//     })
//     .on('mouseout', () => {
//       setHighlightedNodes(new Set());
//       setHighlightedLinks(new Set());

//       node.attr('opacity', 1);
//       link.attr('opacity', 1);
//       g.selectAll('.link-label').attr('opacity', 1);
//     });

//     const linkLabel = g.append('g')
//       .attr('class', 'link-labels')
//       .selectAll('text')
//       .data(links)
//       .enter()
//       .append('text')
//       .attr('class', 'link-label')
//       .attr('dy', -5)
//       .style('font-size', '9px')
//       .style('font-family', 'sans-serif')
//       .style('text-anchor', 'middle')
//       .attr('pointer-events', 'none')
//       .text(d => d.type);

//     const newSimulation = d3.forceSimulation(nodes)
//        // Adjust forces for larger graph
//       .force('link', d3.forceLink(links).id(d => d.id).distance(130).strength(0.4))
//       .force('charge', d3.forceManyBody().strength(-450)) // Slightly less repulsion than before, more than initial
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(35)) // Increased collision
//       .on('tick', ticked);

//     setSimulation(newSimulation);

//     function ticked() {
//       link.attr('d', d => {
//          // Ensure source/target objects have coordinates assigned by the simulation
//          if (!d.source.x || !d.target.x) return "M0,0L0,0";

//          const dx = d.target.x - d.source.x;
//          const dy = d.target.y - d.source.y;
//          const gamma = Math.atan2(dy, dx);
//          const nodeRadius = 12; // Match circle radius
//          const arrowOffset = 8; // clearance + arrow length estimate

//          // Calculate offset points
//          const sourceX = d.source.x + Math.cos(gamma) * (nodeRadius + 1.5); // + stroke/2
//          const sourceY = d.source.y + Math.sin(gamma) * (nodeRadius + 1.5);
//          const targetX = d.target.x - Math.cos(gamma) * (nodeRadius + 1.5 + arrowOffset);
//          const targetY = d.target.y - Math.sin(gamma) * (nodeRadius + 1.5 + arrowOffset);

//          if (isNaN(sourceX) || isNaN(sourceY) || isNaN(targetX) || isNaN(targetY) || (sourceX === targetX && sourceY === targetY)) {
//              return "M0,0";
//          }
//          return `M${sourceX},${sourceY}L${targetX},${targetY}`;
//       });

//       node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);

//       linkLabel
//         .attr('x', d => (d.source.x + d.target.x) / 2)
//         .attr('y', d => (d.source.y + d.target.y) / 2);
//     }

//     function dragstarted(event, d) {
//       if (!event.active) newSimulation.alphaTarget(0.3).restart();
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//       d.fx = event.x;
//       d.fy = event.y;
//     }

//     function dragended(event, d) {
//       if (!event.active) newSimulation.alphaTarget(0);
//       // Keep node fixed:
//       // d.fx = null;
//       // d.fy = null;
//     }
//   };

//   // Node type options - ensure all types from data are here
//   const nodeTypeOptions = [
//     { value: 'all', label: 'All Node Types' },
//     { value: 'Organization', label: 'Organization' },
//     { value: 'Country', label: 'Country' },
//     { value: 'Location', label: 'Location' },
//     { value: 'Associated Entity', label: 'Associated Entity' },
//     { value: 'Sector', label: 'Sector' },
//   ];

//   // Edge type options - ensure all types from data are here
//   const edgeTypeOptions = [
//     { value: 'all', label: 'All Relationship Types' },
//     { value: 'OPERATES_AT', label: 'OPERATES_AT' },
//     { value: 'LOCATED_IN', label: 'LOCATED_IN' },
//     { value: 'Current Investments In', label: 'Current Investments In' },
//     { value: 'Sector', label: 'Sector' },
//   ];

//   return (
//     <div className="flex flex-col h-screen">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10">
//         <h1 className="text-xl font-semibold mb-3">Interactive Knowledge Graph</h1>

//         <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
//           {/* Node Type Filter */}
//           <div>
//             <label htmlFor="node-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label>
//             <select
//               id="node-type-filter"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={selectedNodeType}
//               onChange={e => setSelectedNodeType(e.target.value)}
//             >
//               {nodeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           {/* Edge Type Filter */}
//           <div>
//             <label htmlFor="edge-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label>
//             <select
//               id="edge-type-filter"
//               className="w-52 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={selectedEdgeType}
//               onChange={e => setSelectedEdgeType(e.target.value)}
//             >
//               {edgeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           {/* Search Input */}
//           <div>
//             <label htmlFor="search-input" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes</label>
//             <input
//               id="search-input"
//               type="text"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//               placeholder="Name or type..."
//             />
//           </div>

//           {/* Reset Button */}
//           <button
//             className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1.5 rounded text-sm shadow-sm"
//             onClick={() => {
//               setSelectedNodeType('all');
//               setSelectedEdgeType('all');
//               setSearchTerm('');
//             }}
//           >
//             Reset
//           </button>

//           {/* Toggle Legend Button */}
//           <button
//             className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm"
//             onClick={() => setShowLegend(!showLegend)}
//           >
//             {showLegend ? 'Hide Legend' : 'Show Legend'}
//           </button>
//         </div>

//         {/* Legend */}
//         {showLegend && (
//           <div className="bg-white p-3 rounded border mt-3 text-xs shadow">
//             <h3 className="font-semibold mb-2 text-sm">Legend</h3>

//             {/* Node Types */}
//             <div className="mb-2">
//               <h4 className="font-medium mb-1">Node Types</h4>
//               <div className="flex flex-wrap gap-x-4 gap-y-1">
//                 {nodeTypeOptions.filter(opt => opt.value !== 'all').map(opt => (
//                   <div key={opt.value} className="flex items-center">
//                     <div className="w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: nodeColorScale[opt.value] || '#ccc' }}></div>
//                     <span>{opt.label}</span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Edge Types */}
//             <div>
//               <h4 className="font-medium mb-1">Relationship Types</h4>
//               <div className="flex flex-wrap gap-x-4 gap-y-2">
//                  {edgeTypeOptions.filter(opt => opt.value !== 'all').map(opt => {
//                     const style = edgeStyles[opt.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' };
//                     return (
//                         <div key={opt.value} className="flex items-center">
//                          <svg width="30" height="8" className="mr-1.5">
//                            <line x1="0" y1="4" x2="30" y2="4" stroke={style.stroke} strokeWidth={style.strokeWidth} strokeDasharray={style.dasharray}/>
//                            <polygon points="30,4 25,2 25,6" fill={style.stroke} />
//                          </svg>
//                          <span>{opt.label}</span>
//                        </div>
//                     );
//                  })}
//               </div>
//             </div>

//             <div className="mt-3 text-gray-500">
//               <p>Hover nodes to highlight. Drag nodes to move. Scroll/pinch to zoom.</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Graph Container */}
//       <div className="flex-grow bg-gray-50 border-t border-gray-200 overflow-hidden" >
//         <div id="graph-container" className="w-full h-full">
//             {/* SVG appended here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;























// import React, { useState, useEffect, useCallback } from 'react';
// import * as d3 from 'd3';

// // --- Define the Combined Graph Data (with Tanzania, Angola additions) ---
// const fullGraphData = {
//     // (Data from your last message included here)
//     "nodes": [
//         // --- Organizations ---
//         { "id": "org-adports", "label": "AD Ports Group", "type": "Organization", "properties": {"group": "UAE Investor"} },
//         { "id": "org-dpworld", "label": "DP World", "type": "Organization", "properties": {"group": "UAE Investor"} },

//         // --- Countries ---
//         { "id": "country-libya", "label": "Libya", "type": "Country" },
//         { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//         { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//         { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//         { "id": "country-congo", "label": "Congo (Brazzaville)", "type": "Country" },
//         { "id": "country-angola", "label": "Angola", "type": "Country" }, // Exists
//         { "id": "country-kenya", "label": "Kenya", "type": "Country" }, // Exists
//         { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//         { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//         { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//         { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//         { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//         { "id": "country-tanzania", "label": "Tanzania", "type": "Country" }, // Exists
//         { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//         { "id": "country-southafrica", "label": "South Africa", "type": "Country" },

//         // --- Locations ---
//         // AD Ports Group Locations
//         { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} }, // In Angola
//         { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} }, // In Kenya
//         // DP World Locations
//         { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//         { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//         { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} }, // In Tanzania
//         { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         // Other Logistics Locations
//         { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//         { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },

//         // --- Associated Entities (NEW) ---
//         { "id": "entity-ihc", "label": "IHC", "type": "Associated Entity" },
//         { "id": "entity-irh", "label": "IRH", "type": "Associated Entity" },

//         // --- Sector (NEW) ---
//         { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//     ],
//     "edges": [
//         // --- AD Ports Operations ---
//         { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} }, // Lamu in Kenya
//         { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} }, // Lamu in Kenya
//         // --- DP World Operations ---
//         { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//         { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//         // --- Location to Country Links ---
//         { "source": "loc-djazair", "target": "country-libya", "label": "LOCATED_IN" },
//         { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//         { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//         { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//         { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//         { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//         { "source": "loc-banana", "target": "country-congo", "label": "LOCATED_IN" },
//         { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" }, // Luanda in Angola
//         { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" }, // Lamu in Kenya
//         { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//         { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//         { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//         { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//         { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" }, // Dar in Tanzania
//         { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//         { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },

//         // --- Relationships for Kenya ---
//         { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-kenya", "label": "Sector" },

//         // --- Relationships for Tanzania ---
//         { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-tanzania", "label": "Sector" },

//         // --- Relationships for Angola ---
//         { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-angola", "label": "Sector" },
//     ]
// };


// const InteractiveKnowledgeGraph = () => {
//   // --- State Variables ---
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] }); // Holds the full dataset
//   const [simulation, setSimulation] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [highlightedNodes, setHighlightedNodes] = useState(new Set()); // For potential external use
//   const [highlightedLinks, setHighlightedLinks] = useState(new Set()); // For potential external use
//   const [showLegend, setShowLegend] = useState(true);
//   const [centeredNodeId, setCenteredNodeId] = useState(null); // <-- New state for focused node
//   const [viewState, setViewState] = useState({ // Store zoom/pan state
//       x: 0, y: 0, k: 1
//   });

//   // --- Configuration ---
//   const nodeColorScale = {
//     'Organization': '#4285F4',
//     'Country': '#EA4335',
//     'Location': '#FBBC05',
//     'Associated Entity': '#34A853',
//     'Sector': '#F4B400',
//   };

//   const edgeStyles = {
//     'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },
//     'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },
//     'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' },
//     'Sector': { stroke: '#B36F00', strokeWidth: 1, dasharray: '2,2' },
//   };

//   // --- Effects ---

//   // Load initial full data
//   useEffect(() => {
//     const nodes = fullGraphData.nodes;
//     const links = fullGraphData.edges.map(edge => ({
//       ...edge,
//       source: edge.source, // Keep original source/target IDs
//       target: edge.target,
//       type: edge.label
//     }));
//     setGraphData({ nodes, links });
//   }, []);

//   // Main effect for filtering and rendering
//   useEffect(() => {
//     if (simulation) {
//       simulation.stop();
//     }

//     let nodesToRender = [];
//     let linksToRender = [];

//     // --- Logic to determine nodes/links to render ---
//     if (centeredNodeId) {
//       // --- Centered View Logic ---
//       const centerNode = graphData.nodes.find(n => n.id === centeredNodeId);
//       if (centerNode) {
//         const neighborLinks = graphData.links.filter(link =>
//           link.source === centeredNodeId || link.target === centeredNodeId
//         );
//         const neighborNodeIds = new Set([centeredNodeId]);
//         neighborLinks.forEach(link => {
//           neighborNodeIds.add(link.source);
//           neighborNodeIds.add(link.target);
//         });

//         nodesToRender = graphData.nodes.filter(n => neighborNodeIds.has(n.id));
//         linksToRender = neighborLinks;
//       } else {
//         // Fallback if center node somehow not found (e.g., data mismatch)
//         setCenteredNodeId(null); // Reset centering
//         // Proceed with normal filtering below
//       }
//     }

//     if (!centeredNodeId) {
//       // --- Standard Filter Logic (Only if not centered) ---
//       nodesToRender = [...graphData.nodes];
//       linksToRender = [...graphData.links];

//       // Filter by Node Type
//       if (selectedNodeType !== 'all') {
//         nodesToRender = nodesToRender.filter(node => node.type === selectedNodeType);
//         const nodeIds = new Set(nodesToRender.map(node => node.id));
//         linksToRender = linksToRender.filter(link =>
//           nodeIds.has(link.source) && nodeIds.has(link.target)
//         );
//       }

//       // Filter by Edge Type
//       if (selectedEdgeType !== 'all') {
//         linksToRender = linksToRender.filter(link => link.type === selectedEdgeType);
//         const nodeIdsInLinks = new Set();
//         linksToRender.forEach(link => {
//           nodeIdsInLinks.add(link.source);
//           nodeIdsInLinks.add(link.target);
//         });
//         nodesToRender = nodesToRender.filter(node => nodeIdsInLinks.has(node.id));
//       }

//       // Apply search filter
//       if (searchTerm) {
//         const lowercaseSearch = searchTerm.toLowerCase();
//         nodesToRender = nodesToRender.filter(node =>
//           node.label.toLowerCase().includes(lowercaseSearch) ||
//           node.type.toLowerCase().includes(lowercaseSearch)
//         );
//         const nodeIds = new Set(nodesToRender.map(node => node.id));
//         linksToRender = linksToRender.filter(link =>
//           nodeIds.has(link.source) && nodeIds.has(link.target)
//         );
//       }
//     }

//     // --- Render ---
//     if (nodesToRender.length > 0) {
//       renderGraph(nodesToRender, linksToRender);
//     } else {
//       d3.select('#graph-container').selectAll('*').remove(); // Clear if nothing to show
//     }

//     // Cleanup
//     return () => {
//       if (simulation) {
//         simulation.stop();
//       }
//     };
//     // Dependencies: React to changes in data, filters, search, AND the centered node
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, centeredNodeId, viewState]); // Include viewState? Maybe not needed here, handled in zoom

//   // --- D3 Rendering Function ---
//   const renderGraph = useCallback((nodes, links) => {
//     d3.select('#graph-container').selectAll('*').remove();

//     const container = d3.select('#graph-container').node();
//     if (!container) return; // Exit if container not found

//     const width = container.clientWidth || 1000;
//     const height = container.clientHeight || 700;

//     const zoom = d3.zoom()
//         .scaleExtent([0.1, 8])
//         .on('zoom', (event) => {
//             g.attr('transform', event.transform);
//             // Store zoom state if needed for persistence, but avoid triggering re-render loops
//             // setViewState(event.transform);
//         });

//     const svg = d3.select('#graph-container')
//       .append('svg')
//       .attr('width', '100%')
//       .attr('height', '100%')
//       .attr('viewBox', [0, 0, width, height])
//       .attr('preserveAspectRatio', 'xMidYMid meet')
//       .call(zoom)
//        // Apply initial transform (if needed for persistence between renders)
//       // .call(zoom.transform, d3.zoomIdentity.translate(viewState.x, viewState.y).scale(viewState.k));


//     const g = svg.append('g');
//     // Apply initial transform to the group 'g' instead of SVG root if preferred
//      g.attr('transform', d3.zoomIdentity.translate(viewState.x, viewState.y).scale(viewState.k));


//     svg.append('defs').append('marker')
//       .attr('id', 'arrowhead')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 25)
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('d', 'M0,-5L10,0L0,5')
//       .attr('fill', '#999');

//     // Make copies of nodes/links for the simulation to avoid mutating original state
//     const simNodes = nodes.map(d => ({...d}));
//     const simLinks = links.map(d => ({...d}));

//     const link = g.append('g')
//         .attr('class', 'links')
//         .selectAll('path')
//         .data(simLinks, d => `${d.source}-${d.target}-${d.type}`) // More specific key
//         .enter()
//         .append('path')
//         .attr('class', 'link')
//         .attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//         .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//         .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//         .attr('fill', 'none')
//         .attr('marker-end', 'url(#arrowhead)');

//     const node = g.append('g')
//         .attr('class', 'nodes')
//         .selectAll('g')
//         .data(simNodes, d => d.id) // Key by ID
//         .enter()
//         .append('g')
//         .attr('class', 'node')
//         .style('cursor', 'pointer') // Indicate nodes are clickable
//         .on('click', (event, d) => { // --- Add Click Handler ---
//             // Prevent zoom/drag interference if needed
//              event.stopPropagation();
//              // Center on the clicked node
//              setCenteredNodeId(d.id);
//              // Optionally reset zoom/pan when centering
//              // svg.transition().duration(750).call(zoom.transform, d3.zoomIdentity);
//              // setViewState({ x: 0, y: 0, k: 1 }); // Reset internal view state too
//         })
//         .call(d3.drag() // Keep drag functionality
//           .on('start', dragstarted)
//           .on('drag', dragged)
//           .on('end', dragended));

//     node.append('circle')
//       .attr('r', d => d.id === centeredNodeId ? 16 : 12) // Make centered node slightly larger
//       .attr('fill', d => nodeColorScale[d.type] || '#ccc')
//       .attr('stroke', d => d.id === centeredNodeId ? '#333' : '#fff') // Highlight centered node border
//       .attr('stroke-width', d => d.id === centeredNodeId ? 2.5 : 1.5);

//     node.append('text')
//       .attr('dx', 18)
//       .attr('dy', 5)
//       .text(d => d.label)
//       .style('font-size', '11px')
//       .style('font-family', 'sans-serif')
//       .style('fill', d => d.id === centeredNodeId ? '#000' : '#333') // Make centered label darker
//       .style('font-weight', d => d.id === centeredNodeId ? 'bold' : 'normal')
//       .attr('pointer-events', 'none');

//     node.append('title')
//       .text(d => {
//           let tooltip = `${d.label}\nType: ${d.type}`;
//           if (d.properties) {
//               tooltip += `\n${Object.entries(d.properties).map(([key, value]) => `${key}: ${value}`).join('\n')}`;
//           }
//           return tooltip;
//       });

//     // Hover highlighting
//     node.on('mouseover', (event, d) => {
//         if (d.id === centeredNodeId) return; // Don't dim neighbors of centered node on hover over itself

//         const connectedNodesHighlight = new Set([d.id]);
//         const connectedLinksHighlight = new Set();

//         const currentLinks = g.selectAll('.link').data(); // Use rendered links

//         currentLinks.forEach(linkData => {
//           const sourceId = typeof linkData.source === 'object' ? linkData.source.id : linkData.source;
//           const targetId = typeof linkData.target === 'object' ? linkData.target.id : linkData.target;

//           if (sourceId === d.id || targetId === d.id) {
//             connectedLinksHighlight.add(linkData);
//             connectedNodesHighlight.add(sourceId);
//             connectedNodesHighlight.add(targetId);
//           }
//         });

//         setHighlightedNodes(connectedNodesHighlight);
//         setHighlightedLinks(connectedLinksHighlight);

//         // Apply visual highlights ONLY to non-centered nodes/links
//         node.filter(nd => nd.id !== centeredNodeId) // Don't change opacity of centered node
//             .attr('opacity', nodeData => connectedNodesHighlight.has(nodeData.id) ? 1 : 0.15);
//         link.attr('opacity', linkData => connectedLinksHighlight.has(linkData) ? 1 : 0.1);
//         g.selectAll('.link-label').attr('opacity', linkLabelData => connectedLinksHighlight.has(linkLabelData) ? 1 : 0.1);
//     })
//     .on('mouseout', () => {
//         setHighlightedNodes(new Set());
//         setHighlightedLinks(new Set());

//         // Reset opacity for all elements
//         node.attr('opacity', 1);
//         link.attr('opacity', 1);
//         g.selectAll('.link-label').attr('opacity', 1);
//     });


//     const linkLabel = g.append('g')
//       .attr('class', 'link-labels')
//       .selectAll('text')
//       .data(simLinks, d => `${d.source}-${d.target}-${d.type}`) // Match keying
//       .enter()
//       .append('text')
//       .attr('class', 'link-label')
//       .attr('dy', -5)
//       .style('font-size', '9px')
//       .style('font-family', 'sans-serif')
//       .style('text-anchor', 'middle')
//       .attr('pointer-events', 'none')
//       .text(d => d.type);

//     // --- Simulation Setup ---
//     const newSimulation = d3.forceSimulation(simNodes)
//       .force('link', d3.forceLink(simLinks).id(d => d.id)
//           .distance(centeredNodeId ? 180 : 130) // Longer links in centered view
//           .strength(0.5))
//       .force('charge', d3.forceManyBody().strength(centeredNodeId ? -800 : -450)) // Stronger repulsion in centered view
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(centeredNodeId ? 45 : 35)) // Larger collision radius
//       .on('tick', ticked);

//     setSimulation(newSimulation); // Store simulation instance

//     function ticked() {
//       // Update positions of simulation nodes/links
//       link.attr('d', d => {
//          // Guard against uninitialized coords which simulation provides later
//          if (!d.source.x || !d.target.x) return "M0,0L0,0";

//          const dx = d.target.x - d.source.x;
//          const dy = d.target.y - d.source.y;
//          const gamma = Math.atan2(dy, dx);
//          // Adjust radius based on whether source/target is centered
//          const sourceRadius = d.source.id === centeredNodeId ? 16 : 12;
//          const targetRadius = d.target.id === centeredNodeId ? 16 : 12;
//          const arrowOffset = 8;

//          const sourceX = d.source.x + Math.cos(gamma) * (sourceRadius + 1.5);
//          const sourceY = d.source.y + Math.sin(gamma) * (sourceRadius + 1.5);
//          const targetX = d.target.x - Math.cos(gamma) * (targetRadius + 1.5 + arrowOffset);
//          const targetY = d.target.y - Math.sin(gamma) * (targetRadius + 1.5 + arrowOffset);

//          if (isNaN(sourceX) || isNaN(sourceY) || isNaN(targetX) || isNaN(targetY) || (sourceX === targetX && sourceY === targetY)) {
//              return "M0,0";
//          }
//          return `M${sourceX},${sourceY}L${targetX},${targetY}`;
//       });

//       node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);

//       linkLabel
//         .attr('x', d => (d.source.x + d.target.x) / 2)
//         .attr('y', d => (d.source.y + d.target.y) / 2);
//     }

//     function dragstarted(event, d) {
//       if (!event.active) newSimulation.alphaTarget(0.3).restart();
//       // Use subject fx/fy which d3 provides to handle zoom correctly
//       d.fx = d.x;
//       d.fy = d.y;
//     }

//     function dragged(event, d) {
//         // Use event coordinates directly
//       d.fx = event.x;
//       d.fy = event.y;
//     }

//     function dragended(event, d) {
//       if (!event.active) newSimulation.alphaTarget(0);
//       // Keep node fixed after dragging in this implementation
//       // To release, uncomment below:
//       // d.fx = null;
//       // d.fy = null;
//     }
//   }, [centeredNodeId, viewState]); // Include dependencies for useCallback

//   // --- UI Options ---
//   const nodeTypeOptions = [
//     { value: 'all', label: 'All Node Types' },
//     { value: 'Organization', label: 'Organization' },
//     { value: 'Country', label: 'Country' },
//     { value: 'Location', label: 'Location' },
//     { value: 'Associated Entity', label: 'Associated Entity' },
//     { value: 'Sector', label: 'Sector' },
//   ];

//   const edgeTypeOptions = [
//     { value: 'all', label: 'All Relationship Types' },
//     { value: 'OPERATES_AT', label: 'OPERATES_AT' },
//     { value: 'LOCATED_IN', label: 'LOCATED_IN' },
//     { value: 'Current Investments In', label: 'Current Investments In' },
//     { value: 'Sector', label: 'Sector' },
//   ];

//   // --- Event Handlers for UI ---
//   const handleReset = () => {
//       setSelectedNodeType('all');
//       setSelectedEdgeType('all');
//       setSearchTerm('');
//       setCenteredNodeId(null); // Also reset centered node
//       // Optionally reset zoom/pan
//       // const svg = d3.select('#graph-container svg');
//       // if (svg.node()) {
//       //     svg.transition().duration(750).call(d3.zoom().transform, d3.zoomIdentity);
//       // }
//       // setViewState({ x: 0, y: 0, k: 1 });
//   };

//   const handleShowFullGraph = () => {
//       setCenteredNodeId(null); // Just remove the centering
//   };


//   // --- JSX ---
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10">
//         <h1 className="text-xl font-semibold mb-3">Interactive Knowledge Graph</h1>
//          {/* Display centered node info */}
//          {centeredNodeId && (
//             <div className="mb-2 p-2 bg-blue-100 border border-blue-300 rounded text-sm">
//                 Focusing on: <strong className="font-medium">{graphData.nodes.find(n => n.id === centeredNodeId)?.label || centeredNodeId}</strong>
//                 <button
//                     className="ml-4 text-blue-600 hover:text-blue-800 text-xs"
//                     onClick={handleShowFullGraph}
//                     title="Return to full graph view"
//                  >
//                     (Show Full Graph)
//                  </button>
//             </div>
//          )}

//         <div className="flex flex-wrap items-end gap-x-4 gap-y-2">
//           {/* Filters (disabled when centered?) - Or maybe allow filtering the neighborhood? Let's keep enabled for now */}
//           <div>
//             <label htmlFor="node-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label>
//             <select
//               id="node-type-filter"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={selectedNodeType}
//               onChange={e => { setSelectedNodeType(e.target.value); setCenteredNodeId(null); }} // Clear center on filter change
//               disabled={!!centeredNodeId} // Optionally disable filters when centered
//             >
//               {nodeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label htmlFor="edge-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label>
//             <select
//               id="edge-type-filter"
//               className="w-52 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={selectedEdgeType}
//               onChange={e => { setSelectedEdgeType(e.target.value); setCenteredNodeId(null); }} // Clear center on filter change
//               disabled={!!centeredNodeId} // Optionally disable filters when centered
//             >
//               {edgeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label htmlFor="search-input" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes</label>
//             <input
//               id="search-input"
//               type="text"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={searchTerm}
//               onChange={e => { setSearchTerm(e.target.value); setCenteredNodeId(null); }} // Clear center on search change
//               placeholder="Name or type..."
//               disabled={!!centeredNodeId} // Optionally disable search when centered
//             />
//           </div>

//           {/* Reset Button */}
//           <button
//             className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm shadow-sm" // Changed color to indicate full reset
//             onClick={handleReset}
//             title="Reset all filters and view"
//           >
//             Reset All
//           </button>

//           {/* Show Full Graph Button (alternative to clicking text above) */}
//            {centeredNodeId && (
//                 <button
//                     className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded text-sm shadow-sm"
//                     onClick={handleShowFullGraph}
//                     title="Return to full graph view"
//                  >
//                     Show Full Graph
//                  </button>
//            )}


//           {/* Toggle Legend Button */}
//           <button
//             className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm"
//             onClick={() => setShowLegend(!showLegend)}
//           >
//             {showLegend ? 'Hide Legend' : 'Show Legend'}
//           </button>
//         </div>

//         {/* Legend */}
//         {showLegend && (
//           <div className="bg-white p-3 rounded border mt-3 text-xs shadow max-w-4xl"> {/* Limit legend width */}
//             <h3 className="font-semibold mb-2 text-sm">Legend</h3>
//             <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid layout for legend */}
//                 {/* Node Types */}
//                 <div>
//                   <h4 className="font-medium mb-1">Node Types</h4>
//                   <div className="flex flex-wrap gap-x-4 gap-y-1">
//                     {nodeTypeOptions.filter(opt => opt.value !== 'all').map(opt => (
//                       <div key={opt.value} className="flex items-center">
//                         <div className="w-3 h-3 rounded-full mr-1.5 flex-shrink-0" style={{ backgroundColor: nodeColorScale[opt.value] || '#ccc' }}></div>
//                         <span>{opt.label}</span>
//                       </div>
//                     ))}
//                   </div>
//                 </div>

//                 {/* Edge Types */}
//                 <div>
//                   <h4 className="font-medium mb-1">Relationship Types</h4>
//                   <div className="flex flex-wrap gap-x-4 gap-y-2">
//                      {edgeTypeOptions.filter(opt => opt.value !== 'all').map(opt => {
//                         const style = edgeStyles[opt.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' };
//                         return (
//                             <div key={opt.value} className="flex items-center">
//                              <svg width="30" height="8" className="mr-1.5 flex-shrink-0">
//                                <line x1="0" y1="4" x2="30" y2="4" stroke={style.stroke} strokeWidth={style.strokeWidth} strokeDasharray={style.dasharray}/>
//                                <polygon points="30,4 25,2 25,6" fill={style.stroke} />
//                              </svg>
//                              <span>{opt.label}</span>
//                            </div>
//                         );
//                      })}
//                   </div>
//                 </div>
//             </div>
//             <div className="mt-3 text-gray-500">
//               <p>Click node to focus. Hover node to highlight neighborhood. Drag nodes to move. Scroll/pinch to zoom.</p>
//             </div>
//           </div>
//         )}
//       </div>

//       {/* Graph Container */}
//       <div className="flex-grow bg-gray-50 border-t border-gray-200 overflow-hidden" >
//         <div id="graph-container" className="w-full h-full">
//             {/* SVG appended here */}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;










// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as d3 from 'd3';

// // --- Define the Combined Graph Data (Includes Tanzania, Angola additions) ---
// const fullGraphData = {
//     "nodes": [
//         // --- Organizations ---
//         { "id": "org-adports", "label": "AD Ports Group", "type": "Organization", "properties": {"group": "UAE Investor"} },
//         { "id": "org-dpworld", "label": "DP World", "type": "Organization", "properties": {"group": "UAE Investor"} },

//         // --- Countries ---
//         { "id": "country-libya", "label": "Libya", "type": "Country" },
//         { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//         { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//         { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//         { "id": "country-congo", "label": "Congo (Brazzaville)", "type": "Country" },
//         { "id": "country-angola", "label": "Angola", "type": "Country" }, // Exists
//         { "id": "country-kenya", "label": "Kenya", "type": "Country" }, // Exists
//         { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//         { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//         { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//         { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//         { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//         { "id": "country-tanzania", "label": "Tanzania", "type": "Country" }, // Exists
//         { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//         { "id": "country-southafrica", "label": "South Africa", "type": "Country" },

//         // --- Locations ---
//         { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} }, // In Angola
//         { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} }, // In Kenya
//         { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//         { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//         { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} }, // In Tanzania
//         { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//         { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },

//         // --- Associated Entities ---
//         { "id": "entity-ihc", "label": "IHC", "type": "Associated Entity" },
//         { "id": "entity-irh", "label": "IRH", "type": "Associated Entity" },

//         // --- Sector ---
//         { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//     ],
//     "edges": [
//         { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//         { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "loc-djazair", "target": "country-libya", "label": "LOCATED_IN" },
//         { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//         { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//         { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//         { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//         { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//         { "source": "loc-banana", "target": "country-congo", "label": "LOCATED_IN" },
//         { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//         { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//         { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//         { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//         { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//         { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//         { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//         { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//         { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//         { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-kenya", "label": "Sector" },
//         { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-tanzania", "label": "Sector" },
//         { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-angola", "label": "Sector" },
//     ]
// };

// const InteractiveKnowledgeGraph = () => {
//   // --- State Variables ---
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] }); // Holds the FULL dataset
//   const [simulation, setSimulation] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLegend, setShowLegend] = useState(true);
//   const [isBuildingNetwork, setIsBuildingNetwork] = useState(false); // <-- Mode flag
//   const [visibleNodeIds, setVisibleNodeIds] = useState(new Set()); // <-- IDs in custom network
//   const [lastExpandedNodeId, setLastExpandedNodeId] = useState(null); // For potential highlighting

//   // Refs for D3 elements
//   const svgRef = useRef(null);
//   const gRef = useRef(null);
//   const zoomRef = useRef(null);


//   // --- Configuration ---
//   const nodeColorScale = { /* ... same as before ... */
//         'Organization': '#4285F4',
//         'Country': '#EA4335',
//         'Location': '#FBBC05',
//         'Associated Entity': '#34A853',
//         'Sector': '#F4B400',
//     };
//   const edgeStyles = { /* ... same as before ... */
//         'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },
//         'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },
//         'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' },
//         'Sector': { stroke: '#B36F00', strokeWidth: 1, dasharray: '2,2' },
//     };

//   // --- Effects ---

//   // Load initial full data only once
//   useEffect(() => {
//     const nodes = fullGraphData.nodes;
//     const links = fullGraphData.edges.map(edge => ({
//       ...edge,
//       source: edge.source,
//       target: edge.target,
//       type: edge.label // Map label to type once
//     }));
//     setGraphData({ nodes, links });
//   }, []);

//   // Main effect for filtering/building and rendering
//   useEffect(() => {
//     if (simulation) {
//       simulation.stop();
//     }

//     let nodesToRender = [];
//     let linksToRender = [];

//     if (isBuildingNetwork) {
//       // --- Custom Build Mode ---
//       if (visibleNodeIds.size > 0) {
//           nodesToRender = graphData.nodes.filter(n => visibleNodeIds.has(n.id));
//           // A link is visible if BOTH its source and target are visible
//           linksToRender = graphData.links.filter(link =>
//               visibleNodeIds.has(link.source) && visibleNodeIds.has(link.target)
//           );
//       } else {
//           // Handle case where visible set becomes empty (e.g., if we added removal logic)
//           // For now, just show nothing or reset? Let's show nothing.
//           nodesToRender = [];
//           linksToRender = [];
//       }

//     } else {
//       // --- Overview/Filtered Mode ---
//       nodesToRender = [...graphData.nodes];
//       linksToRender = [...graphData.links];

//       // Apply standard filters (Node Type, Edge Type, Search Term)
//       if (selectedNodeType !== 'all') {
//         nodesToRender = nodesToRender.filter(node => node.type === selectedNodeType);
//         const nodeIds = new Set(nodesToRender.map(node => node.id));
//         linksToRender = linksToRender.filter(link =>
//           nodeIds.has(link.source) && nodeIds.has(link.target)
//         );
//       }

//       if (selectedEdgeType !== 'all') {
//         linksToRender = linksToRender.filter(link => link.type === selectedEdgeType);
//         const nodeIdsInLinks = new Set();
//         linksToRender.forEach(link => {
//           nodeIdsInLinks.add(link.source);
//           nodeIdsInLinks.add(link.target);
//         });
//         nodesToRender = nodesToRender.filter(node => nodeIdsInLinks.has(node.id));
//       }

//       if (searchTerm) {
//         const lowercaseSearch = searchTerm.toLowerCase();
//         nodesToRender = nodesToRender.filter(node =>
//           node.label.toLowerCase().includes(lowercaseSearch) ||
//           node.type.toLowerCase().includes(lowercaseSearch)
//         );
//         const nodeIds = new Set(nodesToRender.map(node => node.id));
//         linksToRender = linksToRender.filter(link =>
//           nodeIds.has(link.source) && nodeIds.has(link.target)
//         );
//       }
//     }

//     // --- Render ---
//     if (nodesToRender.length > 0 || isBuildingNetwork) { // Render even if building but empty
//       renderGraph(nodesToRender, linksToRender);
//     } else {
//       d3.select(svgRef.current).selectChildren().remove(); // Clear if nothing to show and not building
//     }

//     // Cleanup
//     return () => {
//       if (simulation) {
//         simulation.stop();
//       }
//     };
//   // Dependencies: React to changes in full data, filters, search, AND the build state/visible nodes
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, isBuildingNetwork, visibleNodeIds]);

//    // --- Node Click Handler ---
//    const handleNodeClick = useCallback((event, clickedNodeData) => {
//     event.stopPropagation(); // Prevent triggering zoom/pan

//     const clickedId = clickedNodeData.id;
//     setLastExpandedNodeId(clickedId); // Highlight the node being expanded

//     if (!isBuildingNetwork) {
//         // --- Transition from Overview to Build Mode ---
//         setIsBuildingNetwork(true);

//         // Initialize visible nodes: clicked node + its direct neighbors
//         const initialVisibleIds = new Set([clickedId]);
//         graphData.links.forEach(link => {
//             if (link.source === clickedId) {
//                 initialVisibleIds.add(link.target);
//             } else if (link.target === clickedId) {
//                 initialVisibleIds.add(link.source);
//             }
//         });
//         setVisibleNodeIds(initialVisibleIds);

//     } else {
//         // --- Expand Existing Custom Network ---
//         // Find direct neighbors of the clicked node IN THE FULL GRAPH
//         const neighborsToExpand = new Set();
//         graphData.links.forEach(link => {
//             if (link.source === clickedId) {
//                 neighborsToExpand.add(link.target);
//             } else if (link.target === clickedId) {
//                 neighborsToExpand.add(link.source);
//             }
//         });

//         // Add these neighbors to the current visible set
//         setVisibleNodeIds(prevVisibleIds => {
//             const newVisibleIds = new Set(prevVisibleIds); // Clone previous set
//             neighborsToExpand.forEach(neighborId => newVisibleIds.add(neighborId));
//             // Ensure the clicked node itself is still included (should be, but safe)
//             newVisibleIds.add(clickedId);
//             return newVisibleIds;
//         });
//     }

//     // Optional: Center view on the clicked node after expansion/start
//     // This requires access to the SVG and zoom behavior, potentially tricky
//     // If needed, would likely involve calculating node position and using zoom.translateTo

//    }, [isBuildingNetwork, graphData.links]); // Dependencies


//   // --- D3 Rendering Function (using useCallback) ---
//   const renderGraph = useCallback((nodes, links) => {

//     const container = d3.select(svgRef.current).node()?.parentNode; // Get parent container for size
//     if (!container) return;

//     const width = container.clientWidth || 1000;
//     const height = container.clientHeight || 700;

//     // Ensure SVG exists, clear previous content
//     const svg = d3.select(svgRef.current)
//         .attr('width', '100%')
//         .attr('height', '100%')
//         .attr('viewBox', [0, 0, width, height])
//         .attr('preserveAspectRatio', 'xMidYMid meet');

//     svg.selectChildren().remove(); // Clear previous elements

//     const g = svg.append('g').attr('ref', gRef);
//     gRef.current = g.node(); // Store g element ref if needed


//     // Setup zoom AFTER clearing and creating 'g'
//     if (!zoomRef.current) { // Initialize zoom behavior only once
//         zoomRef.current = d3.zoom()
//             .scaleExtent([0.1, 8])
//             .on('zoom', (event) => {
//                 g.attr('transform', event.transform);
//             });
//     }
//     svg.call(zoomRef.current); // Apply zoom behavior to SVG


//     // --- Definitions (Markers) ---
//     svg.append('defs').append('marker')
//       .attr('id', 'arrowhead')
//       .attr('viewBox', '0 -5 10 10')
//       .attr('refX', 25)
//       .attr('refY', 0)
//       .attr('markerWidth', 6)
//       .attr('markerHeight', 6)
//       .attr('orient', 'auto')
//       .append('path')
//       .attr('d', 'M0,-5L10,0L0,5')
//       .attr('fill', '#999');


//     // --- Simulation Data Copies ---
//     // Important: Give simulation fresh copies, especially if nodes have position data (x, y, fx, fy)
//     const simNodes = nodes.map(d => ({ ...d }));
//     const simLinks = links.map(d => ({ ...d }));


//     // --- Render Links ---
//     const link = g.append('g')
//         .attr('class', 'links')
//         .selectAll('path')
//         .data(simLinks, d => `${d.source}-${d.target}-${d.type}`)
//         .join('path') // Use join for enter/update/exit
//         .attr('class', 'link')
//         .attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//         .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//         .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//         .attr('fill', 'none')
//         .attr('marker-end', 'url(#arrowhead)');

//     // --- Render Nodes ---
//     const node = g.append('g')
//         .attr('class', 'nodes')
//         .selectAll('g')
//         .data(simNodes, d => d.id)
//         .join('g') // Use join for enter/update/exit
//         .attr('class', 'node')
//         .style('cursor', 'pointer')
//         .on('click', handleNodeClick) // Attach the React handler
//         .call(d3.drag()
//           .on('start', dragstarted)
//           .on('drag', dragged)
//           .on('end', dragended));

//     node.append('circle')
//       .attr('r', 12)
//       .attr('fill', d => nodeColorScale[d.type] || '#ccc')
//       .attr('stroke', d => d.id === lastExpandedNodeId ? '#f00' : '#fff') // Highlight last expanded
//       .attr('stroke-width', d => d.id === lastExpandedNodeId ? 2.5 : 1.5);

//     node.append('text')
//       .attr('dx', 18)
//       .attr('dy', 5)
//       .text(d => d.label)
//       .style('font-size', '11px')
//       .style('font-family', 'sans-serif')
//       .style('paint-order', 'stroke') // Render stroke behind fill for halo effect
//       .style('stroke', '#fff')      // White halo
//       .style('stroke-width', '3px')
//       .style('stroke-linecap', 'round')
//       .style('stroke-linejoin', 'round')
//       .style('fill', '#333')
//       .attr('pointer-events', 'none');

//     node.append('title') // Tooltip
//       .text(d => {
//           let tooltip = `${d.label}\nType: ${d.type}`;
//           if (d.properties) {
//               tooltip += `\n${Object.entries(d.properties).map(([key, value]) => `${key}: ${value}`).join('\n')}`;
//           }
//           return tooltip;
//       });

//     // --- Render Link Labels ---
//      const linkLabel = g.append('g')
//         .attr('class', 'link-labels')
//         .selectAll('text')
//         .data(simLinks, d => `${d.source}-${d.target}-${d.type}`)
//         .join("text") // Use join
//         .attr('class', 'link-label')
//         .attr('dy', -5)
//         .style('font-size', '9px')
//         .style('font-family', 'sans-serif')
//         .style('text-anchor', 'middle')
//         .attr('pointer-events', 'none')
//         .text(d => d.type);


//     // --- Simulation Setup ---
//     const newSimulation = d3.forceSimulation(simNodes)
//       .force('link', d3.forceLink(simLinks).id(d => d.id)
//           .distance(isBuildingNetwork ? 150 : 130) // Adjust distance based on mode
//           .strength(0.4))
//       .force('charge', d3.forceManyBody().strength(isBuildingNetwork ? -600: -450))
//       .force('center', d3.forceCenter(width / 2, height / 2))
//       .force('collision', d3.forceCollide().radius(isBuildingNetwork ? 40 : 35))
//       .on('tick', ticked);

//     setSimulation(newSimulation); // Store simulation instance for cleanup

//     // --- Simulation Tick Handler ---
//     function ticked() {
//         if (!nodes.length) return; // Skip tick if no nodes

//         link.attr('d', d => {
//             if (!d.source?.x || !d.target?.x) return "M0,0"; // Check source/target exist and have coords

//             const dx = d.target.x - d.source.x;
//             const dy = d.target.y - d.source.y;
//             const gamma = Math.atan2(dy, dx);
//             const sourceRadius = 12; // Base radius
//             const targetRadius = 12;
//             const arrowOffset = 8;

//             const sourceX = d.source.x + Math.cos(gamma) * (sourceRadius + 1.5);
//             const sourceY = d.source.y + Math.sin(gamma) * (sourceRadius + 1.5);
//             const targetX = d.target.x - Math.cos(gamma) * (targetRadius + 1.5 + arrowOffset);
//             const targetY = d.target.y - Math.sin(gamma) * (targetRadius + 1.5 + arrowOffset);

//             if (isNaN(sourceX) || isNaN(sourceY) || isNaN(targetX) || isNaN(targetY) || (sourceX === targetX && sourceY === targetY)) {
//                 return "M0,0";
//             }
//             return `M${sourceX},${sourceY}L${targetX},${targetY}`;
//         });

//         node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);

//         linkLabel
//             .attr('x', d => (d.source?.x + d.target?.x) / 2 || 0) // Add guards
//             .attr('y', d => (d.source?.y + d.target?.y) / 2 || 0);
//     }

//     // --- Drag Handlers ---
//     // Need to access the simulation instance within drag handlers
//     function dragstarted(event, d) {
//         if (!event.active) newSimulation.alphaTarget(0.3).restart();
//         d.fx = d.x;
//         d.fy = d.y;
//     }

//     function dragged(event, d) {
//         d.fx = event.x;
//         d.fy = event.y;
//     }

//     function dragended(event, d) {
//         if (!event.active) newSimulation.alphaTarget(0);
//         // Keep node fixed unless you uncomment below
//         // d.fx = null;
//         // d.fy = null;
//     }

//   }, [isBuildingNetwork, nodeColorScale, edgeStyles, handleNodeClick, lastExpandedNodeId]); // Include relevant dependencies


//   // --- UI Options ---
//   const nodeTypeOptions = [ /* ... same as before ... */
//         { value: 'all', label: 'All Node Types' },
//         { value: 'Organization', label: 'Organization' },
//         { value: 'Country', label: 'Country' },
//         { value: 'Location', label: 'Location' },
//         { value: 'Associated Entity', label: 'Associated Entity' },
//         { value: 'Sector', label: 'Sector' },
//     ];
//   const edgeTypeOptions = [ /* ... same as before ... */
//         { value: 'all', label: 'All Relationship Types' },
//         { value: 'OPERATES_AT', label: 'OPERATES_AT' },
//         { value: 'LOCATED_IN', label: 'LOCATED_IN' },
//         { value: 'Current Investments In', label: 'Current Investments In' },
//         { value: 'Sector', label: 'Sector' },
//     ];

//   // --- Event Handlers for UI ---
//   const handleReset = () => {
//       setIsBuildingNetwork(false);
//       setVisibleNodeIds(new Set());
//       setSelectedNodeType('all');
//       setSelectedEdgeType('all');
//       setSearchTerm('');
//       setLastExpandedNodeId(null);
//       // Reset zoom/pan
//       if (svgRef.current && zoomRef.current) {
//            d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//       }
//   };

//   const handleExitBuildMode = () => {
//       setIsBuildingNetwork(false);
//       setVisibleNodeIds(new Set());
//       setLastExpandedNodeId(null);
//       // Keep filters/search as they were, just exit build mode
//       // Optionally reset zoom here too
//       if (svgRef.current && zoomRef.current) {
//            d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//       }
//   };


//   // --- JSX ---
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10 print:hidden"> {/* Hide controls on print */}
//         <h1 className="text-xl font-semibold mb-3">Interactive Knowledge Graph</h1>

//         {/* Mode Indicator */}
//          {isBuildingNetwork && (
//             <div className="mb-2 p-2 bg-green-100 border border-green-300 rounded text-sm flex justify-between items-center">
//                 <span>
//                     Building Custom Network ({visibleNodeIds.size} nodes visible). Click nodes to expand.
//                      {lastExpandedNodeId && ` Last expanded: ${graphData.nodes.find(n=>n.id === lastExpandedNodeId)?.label || ''}`}
//                  </span>
//                  <button
//                     className="ml-4 text-green-700 hover:text-green-900 text-xs font-medium"
//                     onClick={handleExitBuildMode}
//                     title="Return to filtered/overview mode"
//                  >
//                     (Exit Build Mode)
//                  </button>
//             </div>
//          )}

//         {/* Filters & Search Area */}
//         <div className={`flex flex-wrap items-end gap-x-4 gap-y-2 ${isBuildingNetwork ? 'opacity-50 pointer-events-none' : ''}`}> {/* Disable filters in build mode */}
//           <div>
//             <label htmlFor="node-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label>
//             <select
//               id="node-type-filter"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={selectedNodeType}
//               onChange={e => setSelectedNodeType(e.target.value)}
//               disabled={isBuildingNetwork}
//             >
//               {nodeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label htmlFor="edge-type-filter" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label>
//             <select
//               id="edge-type-filter"
//               className="w-52 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={selectedEdgeType}
//               onChange={e => setSelectedEdgeType(e.target.value)}
//               disabled={isBuildingNetwork}
//             >
//               {edgeTypeOptions.map(option => (
//                 <option key={option.value} value={option.value}>{option.label}</option>
//               ))}
//             </select>
//           </div>

//           <div>
//             <label htmlFor="search-input" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes</label>
//             <input
//               id="search-input"
//               type="text"
//               className="w-48 p-1.5 border border-gray-300 rounded text-sm shadow-sm focus:ring-blue-500 focus:border-blue-500"
//               value={searchTerm}
//               onChange={e => setSearchTerm(e.target.value)}
//               placeholder="Name or type..."
//               disabled={isBuildingNetwork}
//             />
//           </div>
//         </div>

//          {/* Action Buttons Area */}
//          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
//              <button
//                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm shadow-sm"
//                 onClick={handleReset}
//                 title="Reset filters, search, and exit build mode"
//               >
//                 Reset All
//               </button>
//                {isBuildingNetwork && (
//                     <button
//                         className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1.5 rounded text-sm shadow-sm"
//                         onClick={handleExitBuildMode}
//                         title="Return to filtered/overview mode"
//                     >
//                         Exit Build Mode
//                     </button>
//                )}
//               <button
//                 className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm"
//                 onClick={() => setShowLegend(!showLegend)}
//               >
//                 {showLegend ? 'Hide Legend' : 'Show Legend'}
//               </button>
//          </div>


//         {/* Legend */}
//         {showLegend && (
//              <div className="bg-white p-3 rounded border mt-3 text-xs shadow max-w-4xl"> {/* Limit legend width */}
//                 <h3 className="font-semibold mb-2 text-sm">Legend</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4"> {/* Grid layout for legend */}
//                     {/* Node Types */}
//                     <div>
//                       <h4 className="font-medium mb-1">Node Types</h4>
//                       <div className="flex flex-wrap gap-x-4 gap-y-1">
//                         {nodeTypeOptions.filter(opt => opt.value !== 'all').map(opt => (
//                           <div key={opt.value} className="flex items-center">
//                             <div className="w-3 h-3 rounded-full mr-1.5 flex-shrink-0" style={{ backgroundColor: nodeColorScale[opt.value] || '#ccc' }}></div>
//                             <span>{opt.label}</span>
//                           </div>
//                         ))}
//                       </div>
//                     </div>

//                     {/* Edge Types */}
//                     <div>
//                       <h4 className="font-medium mb-1">Relationship Types</h4>
//                       <div className="flex flex-wrap gap-x-4 gap-y-2">
//                          {edgeTypeOptions.filter(opt => opt.value !== 'all').map(opt => {
//                             const style = edgeStyles[opt.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' };
//                             return (
//                                 <div key={opt.value} className="flex items-center">
//                                  <svg width="30" height="8" className="mr-1.5 flex-shrink-0">
//                                    <line x1="0" y1="4" x2="30" y2="4" stroke={style.stroke} strokeWidth={style.strokeWidth} strokeDasharray={style.dasharray}/>
//                                    <polygon points="30,4 25,2 25,6" fill={style.stroke} />
//                                  </svg>
//                                  <span>{opt.label}</span>
//                                </div>
//                             );
//                          })}
//                       </div>
//                     </div>
//                 </div>
//                 <div className="mt-3 text-gray-500">
//                   <p>
//                       {isBuildingNetwork
//                         ? "Build Mode: Click nodes to expand their connections. "
//                         : "Overview Mode: Click any node to start building a custom network from its neighborhood. Use filters/search to refine the overview. "
//                       }
//                        Drag nodes to move. Scroll/pinch to zoom.
//                   </p>
//                 </div>
//               </div>
//         )}
//       </div>

//       {/* Graph Container */}
//       <div className="flex-grow bg-gray-50 border-t border-gray-200 overflow-hidden relative">
//         {/* SVG container */}
//         <svg ref={svgRef} id="graph-container" className="w-full h-full"></svg>

//          {/* Loading or Empty State Overlay (Optional) */}
//          {graphData.nodes.length === 0 && (
//              <div className="absolute inset-0 flex items-center justify-center text-gray-500">Loading data...</div>
//          )}
//          {/* You could add a similar overlay if nodesToRender is empty */}
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;







// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as d3 from 'd3';

// // --- Define the Combined Graph Data (Includes Tanzania, Angola additions) ---
// const fullGraphData = {
//     "nodes": [
//         { "id": "org-adports", "label": "AD Ports Group", "type": "Organization", "properties": {"group": "UAE Investor"} },
//         { "id": "org-dpworld", "label": "DP World", "type": "Organization", "properties": {"group": "UAE Investor"} },
//         { "id": "country-libya", "label": "Libya", "type": "Country" },
//         { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//         { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//         { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//         { "id": "country-congo", "label": "Congo (Brazzaville)", "type": "Country" },
//         { "id": "country-angola", "label": "Angola", "type": "Country" },
//         { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//         { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//         { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//         { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//         { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//         { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//         { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//         { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//         { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//         { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//         { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//         { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//         { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//         { "id": "entity-ihc", "label": "IHC", "type": "Associated Entity" },
//         { "id": "entity-irh", "label": "IRH", "type": "Associated Entity" },
//         { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//     ],
//     "edges": [
//         { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//         { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "loc-djazair", "target": "country-libya", "label": "LOCATED_IN" },
//         { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//         { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//         { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//         { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//         { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//         { "source": "loc-banana", "target": "country-congo", "label": "LOCATED_IN" },
//         { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//         { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//         { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//         { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//         { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//         { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//         { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//         { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//         { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//         { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-kenya", "label": "Sector" },
//         { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-tanzania", "label": "Sector" },
//         { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-angola", "label": "Sector" },
//     ]
// };


// const InteractiveKnowledgeGraph = () => {
//   // --- State Variables ---
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] }); // FULL dataset
//   const [simulation, setSimulation] = useState(null); // Holds the D3 simulation object
//   const simulationRef = useRef(null); // Ref to keep track of simulation across renders for cleanup
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLegend, setShowLegend] = useState(true);
//   const [isBuildingNetwork, setIsBuildingNetwork] = useState(false);
//   const [visibleNodeIds, setVisibleNodeIds] = useState(new Set());
//   const [lastExpandedNodeId, setLastExpandedNodeId] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);

//   // Refs for D3 elements / behaviors
//   const svgRef = useRef(null);
//   const gRef = useRef(null);
//   const zoomRef = useRef(null);

//   // --- Configuration ---
//   const nodeColorScale = {
//         'Organization': '#4285F4', 'Country': '#EA4335', 'Location': '#FBBC05',
//         'Associated Entity': '#34A853', 'Sector': '#F4B400',
//     };
//   const edgeStyles = {
//         'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },
//         'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },
//         'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' },
//         'Sector': { stroke: '#B36F00', strokeWidth: 1, dasharray: '2,2' },
//     };

//   // --- Effects ---

//   // Load initial full data only once
//   useEffect(() => {
//     const nodes = fullGraphData.nodes;
//     const links = fullGraphData.edges.map(edge => ({
//       ...edge, source: edge.source, target: edge.target, type: edge.label
//     }));
//     setGraphData({ nodes, links });
//   }, []);

//   // Initialize D3 zoom behavior once
//    useEffect(() => {
//        if (svgRef.current && !zoomRef.current) { // Ensure SVG exists before creating zoom
//            zoomRef.current = d3.zoom()
//                .scaleExtent([0.1, 8])
//                .on('zoom', (event) => {
//                    if (gRef.current) {
//                        d3.select(gRef.current).attr('transform', event.transform);
//                    }
//                });
//            d3.select(svgRef.current).call(zoomRef.current); // Attach zoom
//        }
//        // Optional: Re-attach if svgRef changes, though unlikely for a fixed container
//    }, []); // Runs once after initial render


//     // --- Node Click Handler (Memoized) ---
//     const handleNodeClick = useCallback((event, clickedNodeData) => {
//         event.stopPropagation();
//         const clickedId = clickedNodeData.id;

//         let nextVisibleIds;

//         if (!isBuildingNetwork) {
//             setIsBuildingNetwork(true);
//             const initialVisibleIds = new Set([clickedId]);
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId) initialVisibleIds.add(link.target);
//                 else if (link.target === clickedId) initialVisibleIds.add(link.source);
//             });
//             nextVisibleIds = initialVisibleIds;

//             const newHistory = [nextVisibleIds];
//             setHistory(newHistory);
//             setHistoryIndex(0);
//             setVisibleNodeIds(nextVisibleIds);
//             setLastExpandedNodeId(clickedId);

//         } else {
//             const currentVisibleIds = history[historyIndex];
//             const neighborsToExpand = new Set();
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId) neighborsToExpand.add(link.target);
//                 else if (link.target === clickedId) neighborsToExpand.add(link.source);
//             });

//             nextVisibleIds = new Set(currentVisibleIds);
//             neighborsToExpand.forEach(id => nextVisibleIds.add(id));
//             nextVisibleIds.add(clickedId);

//             if (nextVisibleIds.size > currentVisibleIds.size) {
//                 const newHistory = history.slice(0, historyIndex + 1);
//                 newHistory.push(nextVisibleIds);
//                 setHistory(newHistory);
//                 setHistoryIndex(newHistory.length - 1);
//                 setVisibleNodeIds(nextVisibleIds);
//                 setLastExpandedNodeId(clickedId);
//             } else {
//                 setLastExpandedNodeId(clickedId); // Highlight even if no new nodes
//             }
//         }
//     }, [isBuildingNetwork, graphData.links, history, historyIndex]); // Dependencies for useCallback


//    // --- D3 Rendering Function (Memoized) ---
//    // Removed simulation state update from here, managed in useEffect
//    const renderGraph = useCallback((nodes, links) => {
//         const container = d3.select(svgRef.current)?.node()?.parentNode;
//         if (!container) return null; // Return null if container not ready

//         const width = container.clientWidth || 1000;
//         const height = container.clientHeight || 700;

//         const svg = d3.select(svgRef.current)
//             .attr('width', '100%')
//             .attr('height', '100%')
//             .attr('viewBox', [0, 0, width, height])
//             .attr('preserveAspectRatio', 'xMidYMid meet');

//         // Ensure zoom is attached (should be by useEffect, but defensive check)
//         if(zoomRef.current) {
//             svg.call(zoomRef.current);
//         } else {
//              // Initialize zoom if it wasn't ready before
//              zoomRef.current = d3.zoom().scaleExtent([0.1, 8]).on('zoom', (event) => {
//                  if (gRef.current) d3.select(gRef.current).attr('transform', event.transform);
//              });
//              svg.call(zoomRef.current);
//         }

//         let g;
//         if (gRef.current) {
//             g = d3.select(gRef.current);
//             g.selectAll('*').remove();
//         } else {
//             g = svg.append('g');
//             gRef.current = g.node();
//         }

//         g.append('defs').append('marker') /* ... (marker definition) ... */
//             .attr('id', 'arrowhead').attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0)
//             .attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto')
//             .append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#999');

//         const simNodes = nodes.map(d => ({ ...d }));
//         const simLinks = links.map(d => ({ ...d }));

//         const link = g.append('g') /* ... (link rendering) ... */
//             .attr('class', 'links').selectAll('path').data(simLinks, d => `${d.source?.id || d.source}-${d.target?.id || d.target}-${d.type}`)
//             .join('path').attr('class', 'link').attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//             .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//             .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//             .attr('fill', 'none').attr('marker-end', 'url(#arrowhead)');

//         const node = g.append('g') /* ... (node rendering) ... */
//             .attr('class', 'nodes').selectAll('g').data(simNodes, d => d.id)
//             .join('g').attr('class', 'node').style('cursor', 'pointer')
//             .on('click', handleNodeClick) // Use the memoized handler
//             .call(d3.drag() /* ... drag handlers need access to simulation ... */
//                 .on('start', dragstarted)
//                 .on('drag', dragged)
//                 .on('end', dragended)
//             );

//         node.append('circle') /* ... (circle rendering) ... */
//             .attr('r', 12).attr('fill', d => nodeColorScale[d.type] || '#ccc')
//             .attr('stroke', d => d.id === lastExpandedNodeId ? '#f00' : '#fff')
//             .attr('stroke-width', d => d.id === lastExpandedNodeId ? 3 : 1.5);

//         node.append('text') /* ... (text rendering) ... */
//              .attr('dx', 18).attr('dy', 5).text(d => d.label)
//              .style('font-size', '11px').style('font-family', 'sans-serif')
//              .style('paint-order', 'stroke').style('stroke', '#fff')
//              .style('stroke-width', '3px').style('stroke-linecap', 'butt')
//              .style('fill', '#333').attr('pointer-events', 'none');

//         node.append('title') /* ... (tooltip rendering) ... */
//              .text(d => { let tt = `${d.label}\nType: ${d.type}`; if(d.properties) tt += `\n${Object.entries(d.properties).map(([k,v])=>`${k}: ${v}`).join('\n')}`; return tt; });

//         const linkLabel = g.append('g') /* ... (link label rendering) ... */
//             .attr('class', 'link-labels').selectAll('text').data(simLinks, d => `${d.source?.id || d.source}-${d.target?.id || d.target}-${d.type}`)
//             .join("text").attr('class', 'link-label').attr('dy', -5)
//             .style('font-size', '9px').style('font-family', 'sans-serif')
//             .style('text-anchor', 'middle').attr('pointer-events', 'none').text(d => d.type);

//         // --- Simulation Setup ---
//         // Stop previous simulation IF it exists before creating a new one
//         if (simulationRef.current) {
//             simulationRef.current.stop();
//         }
//         const newSimulation = d3.forceSimulation(simNodes)
//             .force('link', d3.forceLink(simLinks).id(d => d.id).distance(isBuildingNetwork ? 160 : 130).strength(0.4))
//             .force('charge', d3.forceManyBody().strength(isBuildingNetwork ? -700 : -450))
//             .force('center', d3.forceCenter(width / 2, height / 2))
//             .force('collision', d3.forceCollide().radius(isBuildingNetwork ? 45 : 35))
//             .on('tick', ticked);

//         simulationRef.current = newSimulation; // Store ref to current simulation

//         function ticked() { /* ... (tick logic updates positions based on newSimulation) ... */
//             if (!simNodes.length || !gRef.current) return;
//              link.attr('d', d => {
//                 if (!d.source?.x || !d.target?.x) return "M0,0";
//                 const dx = d.target.x - d.source.x, dy = d.target.y - d.source.y;
//                 const gamma = Math.atan2(dy, dx); const r=12, arrowOffset=8;
//                 const sx = d.source.x + Math.cos(gamma)*(r+1.5), sy = d.source.y + Math.sin(gamma)*(r+1.5);
//                 const tx = d.target.x - Math.cos(gamma)*(r+1.5+arrowOffset), ty = d.target.y - Math.sin(gamma)*(r+1.5+arrowOffset);
//                 if(isNaN(sx+sy+tx+ty) || (dx*dx+dy*dy < (r*2)**2)) return "M0,0";
//                 return `M${sx},${sy}L${tx},${ty}`;
//              });
//              node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);
//              linkLabel.attr('x', d=>(d.source?.x+d.target?.x)/2||0).attr('y', d=>(d.source?.y+d.target?.y)/2||0);
//         }
//         // --- Drag Handlers need access to the 'newSimulation' instance ---
//         function dragstarted(event, d) { if (!event.active) newSimulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }
//         function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
//         function dragended(event, d) { if (!event.active) newSimulation.alphaTarget(0); /* Keep fixed */ }

//         // Return the simulation instance if needed elsewhere, though managing via ref is safer
//         return newSimulation;

//     }, [isBuildingNetwork, nodeColorScale, edgeStyles, handleNodeClick, lastExpandedNodeId]); // Dependencies


//   // Main effect for determining data and calling renderGraph
//   useEffect(() => {
//     // Stop previous simulation before calculating new data
//     if (simulationRef.current) {
//         simulationRef.current.stop();
//     }

//     let nodesToRender = [];
//     let linksToRender = [];

//     // Calculate nodes/links based on mode and state
//      if (isBuildingNetwork) {
//         if (visibleNodeIds.size > 0) {
//             nodesToRender = graphData.nodes.filter(n => visibleNodeIds.has(n.id));
//             linksToRender = graphData.links.filter(link => visibleNodeIds.has(link.source) && visibleNodeIds.has(link.target));
//         } else { nodesToRender = []; linksToRender = []; }
//     } else {
//         // Apply filters (same logic as before)
//         nodesToRender = [...graphData.nodes]; linksToRender = [...graphData.links];
//         if (selectedNodeType !== 'all') { /* ... filter nodes ... */ nodesToRender = nodesToRender.filter(node => node.type === selectedNodeType); const nodeIds = new Set(nodesToRender.map(node => node.id)); linksToRender = linksToRender.filter(link => nodeIds.has(link.source) && nodeIds.has(link.target));}
//         if (selectedEdgeType !== 'all') { /* ... filter links ... */ linksToRender = linksToRender.filter(link => link.type === selectedEdgeType); const nodeIdsInLinks = new Set(); linksToRender.forEach(link => { nodeIdsInLinks.add(link.source); nodeIdsInLinks.add(link.target); }); nodesToRender = nodesToRender.filter(node => nodeIdsInLinks.has(node.id));}
//         if (searchTerm) { /* ... filter search ... */ const ls = searchTerm.toLowerCase(); nodesToRender = nodesToRender.filter(node => node.label.toLowerCase().includes(ls) || node.type.toLowerCase().includes(ls)); const nodeIds = new Set(nodesToRender.map(node => node.id)); linksToRender = linksToRender.filter(link => nodeIds.has(link.source) && nodeIds.has(link.target));}
//     }

//     // Call the rendering function
//     if (nodesToRender.length > 0 || isBuildingNetwork) {
//         renderGraph(nodesToRender, linksToRender); // This will create and store the new simulation in simulationRef
//     } else {
//         d3.select(svgRef.current).selectChildren().remove(); // Clear SVG if no data
//         if (simulationRef.current) { // Ensure simulation is stopped if clearing
//             simulationRef.current.stop();
//             simulationRef.current = null;
//         }
//     }

//     // Cleanup function for the effect itself
//     return () => {
//       if (simulationRef.current) {
//         simulationRef.current.stop();
//       }
//     };
//   // *** REMOVED renderGraph from this dependency array ***
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, isBuildingNetwork, visibleNodeIds]);


//   // --- UI Options ---
//   const nodeTypeOptions = [ /* ... same ... */
//         { value: 'all', label: 'All Node Types' }, { value: 'Organization', label: 'Organization' },
//         { value: 'Country', label: 'Country' }, { value: 'Location', label: 'Location' },
//         { value: 'Associated Entity', label: 'Associated Entity' }, { value: 'Sector', label: 'Sector' },
//     ];
//   const edgeTypeOptions = [ /* ... same ... */
//         { value: 'all', label: 'All Relationship Types' }, { value: 'OPERATES_AT', label: 'OPERATES_AT' },
//         { value: 'LOCATED_IN', label: 'LOCATED_IN' }, { value: 'Current Investments In', label: 'Current Investments In' },
//         { value: 'Sector', label: 'Sector' },
//     ];

//   // --- UI Event Handlers ---
//   const handleReset = () => { /* ... (same reset logic including history) ... */
//       setIsBuildingNetwork(false); setVisibleNodeIds(new Set()); setHistory([]); setHistoryIndex(-1);
//       setSelectedNodeType('all'); setSelectedEdgeType('all'); setSearchTerm(''); setLastExpandedNodeId(null);
//       if (svgRef.current && zoomRef.current) d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//   };
//   const handleExitBuildMode = () => { /* ... (same exit logic including history reset) ... */
//       setIsBuildingNetwork(false); setVisibleNodeIds(new Set()); setHistory([]); setHistoryIndex(-1);
//       setLastExpandedNodeId(null);
//       if (svgRef.current && zoomRef.current) d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//   };
//   const handleUndo = () => { /* ... (same undo logic) ... */
//       if (!isBuildingNetwork || historyIndex <= 0) return;
//       const newIndex = historyIndex - 1; setHistoryIndex(newIndex); setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null);
//   };
//   const handleRedo = () => { /* ... (same redo logic) ... */
//       if (!isBuildingNetwork || historyIndex >= history.length - 1) return;
//       const newIndex = historyIndex + 1; setHistoryIndex(newIndex); setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null);
//   };

//   // --- JSX ---
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10 print:hidden">
//         <h1 className="text-xl font-semibold mb-3">Interactive Knowledge Graph</h1>
//         {/* Mode Indicator & History Controls */}
//          {isBuildingNetwork && (
//             <div className="mb-2 p-2 bg-green-100 border border-green-300 rounded text-sm flex flex-wrap justify-between items-center gap-2">
//                 <span>Build Mode ({visibleNodeIds.size} nodes). Click nodes to expand.</span>
//                  <div className="flex items-center gap-2">
//                      <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                         onClick={handleUndo} disabled={historyIndex <= 0} title="Undo last expansion">Undo</button>
//                      <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                         onClick={handleRedo} disabled={historyIndex >= history.length - 1} title="Redo expansion">Redo</button>
//                      <button className="text-green-700 hover:text-green-900 text-xs font-medium" onClick={handleExitBuildMode} title="Return to filtered/overview mode">(Exit Build Mode)</button>
//                  </div>
//             </div>
//          )}
//         {/* Filters & Search Area */}
//         <div className={`flex flex-wrap items-end gap-x-4 gap-y-2 ${isBuildingNetwork ? 'opacity-50 pointer-events-none' : ''}`}>
//             {/* Filters */}
//             <div><label htmlFor="ntf" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label><select id="ntf" className="w-48 p-1.5 border border-gray-300 rounded text-sm" value={selectedNodeType} onChange={e=>setSelectedNodeType(e.target.value)} disabled={isBuildingNetwork}>{nodeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
//             <div><label htmlFor="etf" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label><select id="etf" className="w-52 p-1.5 border border-gray-300 rounded text-sm" value={selectedEdgeType} onChange={e=>setSelectedEdgeType(e.target.value)} disabled={isBuildingNetwork}>{edgeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
//             <div><label htmlFor="si" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes</label><input id="si" type="text" className="w-48 p-1.5 border border-gray-300 rounded text-sm" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Name or type..." disabled={isBuildingNetwork}/></div>
//         </div>
//          {/* Action Buttons Area */}
//          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
//              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm" onClick={handleReset} title="Reset filters, search, and exit build mode">Reset All</button>
//              <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm" onClick={() => setShowLegend(!showLegend)}>{showLegend ? 'Hide Legend' : 'Show Legend'}</button>
//          </div>
//         {/* Legend */}
//         {showLegend && (
//              <div className="bg-white p-3 rounded border mt-3 text-xs shadow max-w-4xl">
//                 {/* Legend content structure same as before */}
//                 <h3 className="font-semibold mb-2 text-sm">Legend</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div><h4 className="font-medium mb-1">Node Types</h4><div className="flex flex-wrap gap-x-4 gap-y-1">{nodeTypeOptions.filter(o=>o.value !== 'all').map(o=><div key={o.value} className="flex items-center"><div className="w-3 h-3 R mr-1.5 f" style={{ backgroundColor: nodeColorScale[o.value] || '#ccc' }}></div><span>{o.label}</span></div>)}</div></div>
//                     <div><h4 className="font-medium mb-1">Relationship Types</h4><div className="flex flex-wrap gap-x-4 gap-y-2">{edgeTypeOptions.filter(o=>o.value !== 'all').map(o=>{ const s = edgeStyles[o.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' }; return (<div key={o.value} className="flex items-center"><svg width="30" height="8" className="mr-1.5 f"><line x1="0" y1="4" x2="30" y2="4" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeDasharray={s.dasharray}/><polygon points="30,4 25,2 25,6" fill={s.stroke} /></svg><span>{o.label}</span></div>); })}</div></div>
//                 </div>
//                 <div className="mt-3 text-gray-500"><p>{isBuildingNetwork ? "Build Mode: Click nodes to expand. Use Undo/Redo. " : "Overview Mode: Click node to start building. Use filters/search. "} Drag nodes. Scroll/pinch to zoom.</p></div>
//             </div>
//         )}
//       </div>
//       {/* Graph Container */}
//       <div className="flex-grow bg-gray-50 border-t border-gray-200 overflow-hidden relative">
//         <svg ref={svgRef} id="graph-container" className="w-full h-full"></svg>
//          {graphData.nodes.length === 0 && (<div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">Loading...</div>)}
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;





















// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as d3 from 'd3';

// // --- Define the Combined Graph Data (Includes Tanzania, Angola additions) ---
// const fullGraphData = {
//     "nodes": [
//         { "id": "org-adports", "label": "AD Ports Group", "type": "Organization", "properties": {"group": "UAE Investor"} },
//         { "id": "org-dpworld", "label": "DP World", "type": "Organization", "properties": {"group": "UAE Investor"} },
//         { "id": "country-libya", "label": "Libya", "type": "Country" },
//         { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//         { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//         { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//         { "id": "country-congo", "label": "Congo (Brazzaville)", "type": "Country" },
//         { "id": "country-angola", "label": "Angola", "type": "Country" },
//         { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//         { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//         { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//         { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//         { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//         { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//         { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//         { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//         { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//         { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//         { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//         { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//         { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//         { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//         { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//         { "id": "entity-ihc", "label": "IHC", "type": "Associated Entity" },
//         { "id": "entity-irh", "label": "IRH", "type": "Associated Entity" },
//         { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//     ],
//     "edges": [
//         { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//         { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//         { "source": "loc-djazair", "target": "country-libya", "label": "LOCATED_IN" },
//         { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//         { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//         { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//         { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//         { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//         { "source": "loc-banana", "target": "country-congo", "label": "LOCATED_IN" },
//         { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//         { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//         { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//         { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//         { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//         { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//         { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//         { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//         { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//         { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//         { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-kenya", "label": "Sector" },
//         { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-tanzania", "label": "Sector" },
//         { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//         { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },
//         { "source": "sector-mining", "target": "country-angola", "label": "Sector" },
//     ]
// };


// const InteractiveKnowledgeGraph = () => {
//   // --- State Variables ---
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] }); // FULL dataset
//   const [simulation, setSimulation] = useState(null); // Holds the D3 simulation object
//   const simulationRef = useRef(null); // Ref to keep track of simulation across renders for cleanup
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLegend, setShowLegend] = useState(true);
//   const [isBuildingNetwork, setIsBuildingNetwork] = useState(false);
//   const [visibleNodeIds, setVisibleNodeIds] = useState(new Set());
//   const [lastExpandedNodeId, setLastExpandedNodeId] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);

//   // Refs for D3 elements / behaviors
//   const svgRef = useRef(null);
//   const gRef = useRef(null);
//   const zoomRef = useRef(null);

//   // --- Configuration ---
//   const nodeColorScale = {
//         'Organization': '#4285F4', 'Country': '#EA4335', 'Location': '#FBBC05',
//         'Associated Entity': '#34A853', 'Sector': '#F4B400',
//     };
//   const edgeStyles = {
//         'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },
//         'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },
//         'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' },
//         'Sector': { stroke: '#B36F00', strokeWidth: 1, dasharray: '2,2' },
//         // --- Added styles ---
//         'OWNS': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' }, // Green, solid
//         'IS_OWNED_BY': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' }, // Same green, solid
//     };

//   // --- Effects ---

//   // Load initial full data only once
//   useEffect(() => {
//     const nodes = fullGraphData.nodes;
//     const links = fullGraphData.edges.map(edge => ({
//       ...edge, source: edge.source, target: edge.target, type: edge.label
//     }));
//     setGraphData({ nodes, links });
//   }, []);

//   // Initialize D3 zoom behavior once
//    useEffect(() => {
//        if (svgRef.current && !zoomRef.current) { // Ensure SVG exists before creating zoom
//            zoomRef.current = d3.zoom()
//                .scaleExtent([0.1, 8])
//                .on('zoom', (event) => {
//                    if (gRef.current) {
//                        d3.select(gRef.current).attr('transform', event.transform);
//                    }
//                });
//            d3.select(svgRef.current).call(zoomRef.current); // Attach zoom
//        }
//        // Optional: Re-attach if svgRef changes, though unlikely for a fixed container
//    }, []); // Runs once after initial render


//     // --- Node Click Handler (Memoized) ---
//     const handleNodeClick = useCallback((event, clickedNodeData) => {
//         event.stopPropagation();
//         const clickedId = clickedNodeData.id;

//         let nextVisibleIds;

//         if (!isBuildingNetwork) {
//             setIsBuildingNetwork(true);
//             const initialVisibleIds = new Set([clickedId]);
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId) initialVisibleIds.add(link.target);
//                 else if (link.target === clickedId) initialVisibleIds.add(link.source);
//             });
//             nextVisibleIds = initialVisibleIds;

//             const newHistory = [nextVisibleIds];
//             setHistory(newHistory);
//             setHistoryIndex(0);
//             setVisibleNodeIds(nextVisibleIds);
//             setLastExpandedNodeId(clickedId);

//         } else {
//             const currentVisibleIds = history[historyIndex];
//             const neighborsToExpand = new Set();
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId) neighborsToExpand.add(link.target);
//                 else if (link.target === clickedId) neighborsToExpand.add(link.source);
//             });

//             nextVisibleIds = new Set(currentVisibleIds);
//             neighborsToExpand.forEach(id => nextVisibleIds.add(id));
//             nextVisibleIds.add(clickedId);

//             if (nextVisibleIds.size > currentVisibleIds.size) {
//                 const newHistory = history.slice(0, historyIndex + 1);
//                 newHistory.push(nextVisibleIds);
//                 setHistory(newHistory);
//                 setHistoryIndex(newHistory.length - 1);
//                 setVisibleNodeIds(nextVisibleIds);
//                 setLastExpandedNodeId(clickedId);
//             } else {
//                 setLastExpandedNodeId(clickedId); // Highlight even if no new nodes
//             }
//         }
//     }, [isBuildingNetwork, graphData.links, history, historyIndex]); // Dependencies for useCallback


//    // --- D3 Rendering Function (Memoized) ---
//    // Removed simulation state update from here, managed in useEffect
//    const renderGraph = useCallback((nodes, links) => {
//         const container = d3.select(svgRef.current)?.node()?.parentNode;
//         if (!container) return null; // Return null if container not ready

//         const width = container.clientWidth || 1000;
//         const height = container.clientHeight || 700;

//         const svg = d3.select(svgRef.current)
//             .attr('width', '100%')
//             .attr('height', '100%')
//             .attr('viewBox', [0, 0, width, height])
//             .attr('preserveAspectRatio', 'xMidYMid meet');

//         // Ensure zoom is attached (should be by useEffect, but defensive check)
//         if(zoomRef.current) {
//             svg.call(zoomRef.current);
//         } else {
//              // Initialize zoom if it wasn't ready before
//              zoomRef.current = d3.zoom().scaleExtent([0.1, 8]).on('zoom', (event) => {
//                  if (gRef.current) d3.select(gRef.current).attr('transform', event.transform);
//              });
//              svg.call(zoomRef.current);
//         }

//         let g;
//         if (gRef.current) {
//             g = d3.select(gRef.current);
//             g.selectAll('*').remove();
//         } else {
//             g = svg.append('g');
//             gRef.current = g.node();
//         }

//         g.append('defs').append('marker') /* ... (marker definition) ... */
//             .attr('id', 'arrowhead').attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0)
//             .attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto')
//             .append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#999');

//         const simNodes = nodes.map(d => ({ ...d }));
//         const simLinks = links.map(d => ({ ...d }));

//         const link = g.append('g') /* ... (link rendering) ... */
//             .attr('class', 'links').selectAll('path').data(simLinks, d => `${d.source?.id || d.source}-${d.target?.id || d.target}-${d.type}`)
//             .join('path').attr('class', 'link').attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//             .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//             .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//             .attr('fill', 'none').attr('marker-end', 'url(#arrowhead)');

//         const node = g.append('g') /* ... (node rendering) ... */
//             .attr('class', 'nodes').selectAll('g').data(simNodes, d => d.id)
//             .join('g').attr('class', 'node').style('cursor', 'pointer')
//             .on('click', handleNodeClick) // Use the memoized handler
//             .call(d3.drag() /* ... drag handlers need access to simulation ... */
//                 .on('start', dragstarted)
//                 .on('drag', dragged)
//                 .on('end', dragended)
//             );

//         node.append('circle') /* ... (circle rendering) ... */
//             .attr('r', 12).attr('fill', d => nodeColorScale[d.type] || '#ccc')
//             .attr('stroke', d => d.id === lastExpandedNodeId ? '#f00' : '#fff')
//             .attr('stroke-width', d => d.id === lastExpandedNodeId ? 3 : 1.5);

//         node.append('text') /* ... (text rendering) ... */
//              .attr('dx', 18).attr('dy', 5).text(d => d.label)
//              .style('font-size', '11px').style('font-family', 'sans-serif')
//              .style('paint-order', 'stroke').style('stroke', '#fff')
//              .style('stroke-width', '3px').style('stroke-linecap', 'butt')
//              .style('fill', '#333').attr('pointer-events', 'none');

//         node.append('title') /* ... (tooltip rendering) ... */
//              .text(d => { let tt = `${d.label}\nType: ${d.type}`; if(d.properties) tt += `\n${Object.entries(d.properties).map(([k,v])=>`${k}: ${v}`).join('\n')}`; return tt; });

//         const linkLabel = g.append('g') /* ... (link label rendering) ... */
//             .attr('class', 'link-labels').selectAll('text').data(simLinks, d => `${d.source?.id || d.source}-${d.target?.id || d.target}-${d.type}`)
//             .join("text").attr('class', 'link-label').attr('dy', -5)
//             .style('font-size', '9px').style('font-family', 'sans-serif')
//             .style('text-anchor', 'middle').attr('pointer-events', 'none').text(d => d.type);

//         // --- Simulation Setup ---
//         // Stop previous simulation IF it exists before creating a new one
//         if (simulationRef.current) {
//             simulationRef.current.stop();
//         }
//         const newSimulation = d3.forceSimulation(simNodes)
//             .force('link', d3.forceLink(simLinks).id(d => d.id).distance(isBuildingNetwork ? 160 : 130).strength(0.4))
//             .force('charge', d3.forceManyBody().strength(isBuildingNetwork ? -700 : -450))
//             .force('center', d3.forceCenter(width / 2, height / 2))
//             .force('collision', d3.forceCollide().radius(isBuildingNetwork ? 45 : 35))
//             .on('tick', ticked);

//         simulationRef.current = newSimulation; // Store ref to current simulation

//         function ticked() { /* ... (tick logic updates positions based on newSimulation) ... */
//             if (!simNodes.length || !gRef.current) return;
//              link.attr('d', d => {
//                 if (!d.source?.x || !d.target?.x) return "M0,0";
//                 const dx = d.target.x - d.source.x, dy = d.target.y - d.source.y;
//                 const gamma = Math.atan2(dy, dx); const r=12, arrowOffset=8;
//                 const sx = d.source.x + Math.cos(gamma)*(r+1.5), sy = d.source.y + Math.sin(gamma)*(r+1.5);
//                 const tx = d.target.x - Math.cos(gamma)*(r+1.5+arrowOffset), ty = d.target.y - Math.sin(gamma)*(r+1.5+arrowOffset);
//                 if(isNaN(sx+sy+tx+ty) || (dx*dx+dy*dy < (r*2)**2)) return "M0,0";
//                 return `M${sx},${sy}L${tx},${ty}`;
//              });
//              node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);
//              linkLabel.attr('x', d=>(d.source?.x+d.target?.x)/2||0).attr('y', d=>(d.source?.y+d.target?.y)/2||0);
//         }
//         // --- Drag Handlers need access to the 'newSimulation' instance ---
//         function dragstarted(event, d) { if (!event.active) newSimulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }
//         function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
//         function dragended(event, d) { if (!event.active) newSimulation.alphaTarget(0); /* Keep fixed */ }

//         // Return the simulation instance if needed elsewhere, though managing via ref is safer
//         return newSimulation;

//     }, [isBuildingNetwork, nodeColorScale, edgeStyles, handleNodeClick, lastExpandedNodeId]); // Dependencies


//   // Main effect for determining data and calling renderGraph
//   useEffect(() => {
//     // Stop previous simulation before calculating new data
//     if (simulationRef.current) {
//         simulationRef.current.stop();
//     }

//     let nodesToRender = [];
//     let linksToRender = [];

//     // Calculate nodes/links based on mode and state
//      if (isBuildingNetwork) {
//         if (visibleNodeIds.size > 0) {
//             nodesToRender = graphData.nodes.filter(n => visibleNodeIds.has(n.id));
//             linksToRender = graphData.links.filter(link => visibleNodeIds.has(link.source) && visibleNodeIds.has(link.target));
//         } else { nodesToRender = []; linksToRender = []; }
//     } else {
//         // Apply filters (same logic as before)
//         nodesToRender = [...graphData.nodes]; linksToRender = [...graphData.links];
//         if (selectedNodeType !== 'all') { /* ... filter nodes ... */ nodesToRender = nodesToRender.filter(node => node.type === selectedNodeType); const nodeIds = new Set(nodesToRender.map(node => node.id)); linksToRender = linksToRender.filter(link => nodeIds.has(link.source) && nodeIds.has(link.target));}
//         if (selectedEdgeType !== 'all') { /* ... filter links ... */ linksToRender = linksToRender.filter(link => link.type === selectedEdgeType); const nodeIdsInLinks = new Set(); linksToRender.forEach(link => { nodeIdsInLinks.add(link.source); nodeIdsInLinks.add(link.target); }); nodesToRender = nodesToRender.filter(node => nodeIdsInLinks.has(node.id));}
//         if (searchTerm) { /* ... filter search ... */ const ls = searchTerm.toLowerCase(); nodesToRender = nodesToRender.filter(node => node.label.toLowerCase().includes(ls) || node.type.toLowerCase().includes(ls)); const nodeIds = new Set(nodesToRender.map(node => node.id)); linksToRender = linksToRender.filter(link => nodeIds.has(link.source) && nodeIds.has(link.target));}
//     }

//     // Call the rendering function
//     if (nodesToRender.length > 0 || isBuildingNetwork) {
//         renderGraph(nodesToRender, linksToRender); // This will create and store the new simulation in simulationRef
//     } else {
//         d3.select(svgRef.current).selectChildren().remove(); // Clear SVG if no data
//         if (simulationRef.current) { // Ensure simulation is stopped if clearing
//             simulationRef.current.stop();
//             simulationRef.current = null;
//         }
//     }

//     // Cleanup function for the effect itself
//     return () => {
//       if (simulationRef.current) {
//         simulationRef.current.stop();
//       }
//     };
//   // *** REMOVED renderGraph from this dependency array ***
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, isBuildingNetwork, visibleNodeIds]);


//   // --- UI Options ---
//   const nodeTypeOptions = [ /* ... same ... */
//         { value: 'all', label: 'All Node Types' }, { value: 'Organization', label: 'Organization' },
//         { value: 'Country', label: 'Country' }, { value: 'Location', label: 'Location' },
//         { value: 'Associated Entity', label: 'Associated Entity' }, { value: 'Sector', label: 'Sector' },
//     ];
//   const edgeTypeOptions = [ /* ... same ... */
//         { value: 'all', label: 'All Relationship Types' }, { value: 'OPERATES_AT', label: 'OPERATES_AT' },
//         { value: 'LOCATED_IN', label: 'LOCATED_IN' }, { value: 'Current Investments In', label: 'Current Investments In' },
//         { value: 'Sector', label: 'Sector' },
//                 // --- Added options ---
//         { value: 'OWNS', label: 'OWNS' },
//         { value: 'IS_OWNED_BY', label: 'IS_OWNED_BY' },
//     ];

//   // --- UI Event Handlers ---
//   const handleReset = () => { /* ... (same reset logic including history) ... */
//       setIsBuildingNetwork(false); setVisibleNodeIds(new Set()); setHistory([]); setHistoryIndex(-1);
//       setSelectedNodeType('all'); setSelectedEdgeType('all'); setSearchTerm(''); setLastExpandedNodeId(null);
//       if (svgRef.current && zoomRef.current) d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//   };
//   const handleExitBuildMode = () => { /* ... (same exit logic including history reset) ... */
//       setIsBuildingNetwork(false); setVisibleNodeIds(new Set()); setHistory([]); setHistoryIndex(-1);
//       setLastExpandedNodeId(null);
//       if (svgRef.current && zoomRef.current) d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//   };
//   const handleUndo = () => { /* ... (same undo logic) ... */
//       if (!isBuildingNetwork || historyIndex <= 0) return;
//       const newIndex = historyIndex - 1; setHistoryIndex(newIndex); setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null);
//   };
//   const handleRedo = () => { /* ... (same redo logic) ... */
//       if (!isBuildingNetwork || historyIndex >= history.length - 1) return;
//       const newIndex = historyIndex + 1; setHistoryIndex(newIndex); setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null);
//   };

//   // --- JSX ---
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10 print:hidden">
//         <h1 className="text-xl font-semibold mb-3">Interactive Knowledge Graph</h1>
//         {/* Mode Indicator & History Controls */}
//          {isBuildingNetwork && (
//             <div className="mb-2 p-2 bg-green-100 border border-green-300 rounded text-sm flex flex-wrap justify-between items-center gap-2">
//                 <span>Build Mode ({visibleNodeIds.size} nodes). Click nodes to expand.</span>
//                  <div className="flex items-center gap-2">
//                      <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                         onClick={handleUndo} disabled={historyIndex <= 0} title="Undo last expansion">Undo</button>
//                      <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                         onClick={handleRedo} disabled={historyIndex >= history.length - 1} title="Redo expansion">Redo</button>
//                      <button className="text-green-700 hover:text-green-900 text-xs font-medium" onClick={handleExitBuildMode} title="Return to filtered/overview mode">(Exit Build Mode)</button>
//                  </div>
//             </div>
//          )}
//         {/* Filters & Search Area */}
//         <div className={`flex flex-wrap items-end gap-x-4 gap-y-2 ${isBuildingNetwork ? 'opacity-50 pointer-events-none' : ''}`}>
//             {/* Filters */}
//             <div><label htmlFor="ntf" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label><select id="ntf" className="w-48 p-1.5 border border-gray-300 rounded text-sm" value={selectedNodeType} onChange={e=>setSelectedNodeType(e.target.value)} disabled={isBuildingNetwork}>{nodeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
//             <div><label htmlFor="etf" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label><select id="etf" className="w-52 p-1.5 border border-gray-300 rounded text-sm" value={selectedEdgeType} onChange={e=>setSelectedEdgeType(e.target.value)} disabled={isBuildingNetwork}>{edgeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
//             <div><label htmlFor="si" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes</label><input id="si" type="text" className="w-48 p-1.5 border border-gray-300 rounded text-sm" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Name or type..." disabled={isBuildingNetwork}/></div>
//         </div>
//          {/* Action Buttons Area */}
//          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
//              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm" onClick={handleReset} title="Reset filters, search, and exit build mode">Reset All</button>
//              <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm" onClick={() => setShowLegend(!showLegend)}>{showLegend ? 'Hide Legend' : 'Show Legend'}</button>
//          </div>
//         {/* Legend */}
//         {showLegend && (
//              <div className="bg-white p-3 rounded border mt-3 text-xs shadow max-w-4xl">
//                 {/* Legend content structure same as before */}
//                 <h3 className="font-semibold mb-2 text-sm">Legend</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div><h4 className="font-medium mb-1">Node Types</h4><div className="flex flex-wrap gap-x-4 gap-y-1">{nodeTypeOptions.filter(o=>o.value !== 'all').map(o=><div key={o.value} className="flex items-center"><div className="w-3 h-3 R mr-1.5 f" style={{ backgroundColor: nodeColorScale[o.value] || '#ccc' }}></div><span>{o.label}</span></div>)}</div></div>
//                     <div><h4 className="font-medium mb-1">Relationship Types</h4><div className="flex flex-wrap gap-x-4 gap-y-2">{edgeTypeOptions.filter(o=>o.value !== 'all').map(o=>{ const s = edgeStyles[o.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' }; return (<div key={o.value} className="flex items-center"><svg width="30" height="8" className="mr-1.5 f"><line x1="0" y1="4" x2="30" y2="4" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeDasharray={s.dasharray}/><polygon points="30,4 25,2 25,6" fill={s.stroke} /></svg><span>{o.label}</span></div>); })}</div></div>
//                 </div>
//                 <div className="mt-3 text-gray-500"><p>{isBuildingNetwork ? "Build Mode: Click nodes to expand. Use Undo/Redo. " : "Overview Mode: Click node to start building. Use filters/search. "} Drag nodes. Scroll/pinch to zoom.</p></div>
//             </div>
//         )}
//       </div>
//       {/* Graph Container */}
//       <div className="flex-grow bg-gray-50 border-t border-gray-200 overflow-hidden relative">
//         <svg ref={svgRef} id="graph-container" className="w-full h-full"></svg>
//          {graphData.nodes.length === 0 && (<div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">Loading...</div>)}
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;


























// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as d3 from 'd3';

// const fullGraphData = {
//   "nodes": [
//           {
//             "id": "org-adports",
//             "label": "AD Ports Group",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Maritime Services", "Industrial Zones"],
//               "subType": "Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "org-dpworld",
//             "label": "DP World",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Terminals", "Supply Chain Management"],
//               "subType": "Global Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "entity-ihc",
//             "label": "IHC (International Holding Company)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed Conglomerate)",
//               "primaryFocus": ["Investment Holding", "Diversified Conglomerate"],
//               "subType": "Holding Company"
//             }
//           },
//           {
//             "id": "entity-irh",
//             "label": "IRH (International Resources Holding)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial",
//               "primaryFocus": ["Resources", "Mining Investment"],
//               "subType": "Investment Arm / Subsidiary",
//               "parentCompany": "IHC"
//             }
//           },
  
//           {
//             "id": "org-pic",
//             "label": "Public Investment Corporation SOC Ltd (PIC)",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "South Africa",
//               "entityNature": "State-Owned Corporation (SOC)",
//               "primaryFocus": ["Investment Management", "Public Funds"],
//               "subType": "State-Owned Investment Corporation"
//             }
//           },
//           {
//             "id": "gov-som-fisheries",
//             "label": "Somali Ministry of Fisheries & Blue Economy",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Somalia",
//               "entityNature": "Government Ministry",
//               "primaryFocus": ["Fisheries", "Maritime Economy", "Regulation"],
//               "subType": "National Ministry"
//             }
//           },
//           {
//             "id": "org-beng-commerce",
//             "label": "Benghazi Chamber of Commerce",
//             "type": "Organization",
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Business Association",
//               "primaryFocus": ["Commerce", "Business Development"],
//               "subType": "Chamber of Commerce"
//             }
//           },
//           {
//             "id": "org-emaar",
//             "label": "Emaar",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed)",
//               "primaryFocus": ["Real Estate Development", "Property Management"],
//               "subType": "Development Company"
//             }
//           },
//           {
//             "id": "gov-lib-devagency",
//             "label": "National Development Agency (Libya)",
//             "type": "Government Body",
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Government Agency",
//               "primaryFocus": ["National Development", "Project Management"],
//               "subType": "Development Agency",
//               "notes": "Reported as 'Hafter managed' in source"
//             }
//           },
//           {
//             "id": "loc-elmreisa",
//             "label": "Elmreisa Free Zone (EFZ)",
//             "type": "Location",
//             "properties": {
//               "country": "Libya",
//               "kind": "Free Zone", 
//               "primaryFocus": ["Economic Development", "Trade"],
//               "status": "Under Development/Planned" 
//             }
//           },
//           {
//             "id": "org-gci",
//             "label": "GCI",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE", 
//               "entityNature": "Investment Entity (Inferred)",
//               "primaryFocus": ["Carbon Credits", "Environmental Projects", "Forestry"],
//               "notes": "Associated with UAE takeover of African forests for Blue Carbon deal"
//             }
//           },
//           {
//             "id": "org-eap",
//             "label": "EAP",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE", 
//               "entityNature": "Agricultural Program/Entity (Inferred, Public-Private)",
//               "primaryFocus": ["Agriculture", "Farmland", "Bilateral Agreements"],
//               "notes": "Associated with UAE farmlands across Africa"
//             }
//           },
//           {
//             "id": "org-tayan",
//             "label": "TAYAN", 
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Security/Military Entity (Inferred)",
//               "primaryFocus": ["Security Agreements", "Military Training"],
//               "notes": "Associated with UAE MoUs focused on anti-terrorism & military training"
//             }
//           },
//           {
//             "id": "org-masdar",
//             "label": "Masdar",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Owned)",
//               "primaryFocus": ["Renewable Energy", "Sustainable Development", "Energy Transition"],
//               "subType": "Renewable Energy Company",
//               "ownership": "Abu Dhabi Government (via Mubadala, ADNOC, TAQA)"
//             }
//           },
//           {
//             "id": "org-primeragold",
//             "label": "Primera Gold",
//             "type": "Organization",
//             "properties": {
//               "entityNature": "Commercial",
//               "primaryFocus": ["Mining", "Gold Trading"],
//               "subType": "Mining Company / Trading Firm",
//               "ownership": "IHC", 
//               "operationalRegion": ["DRC"] 
//             }
//           },
  
//   { "id": "country-algeria", "label": "Algeria", "type": "Country" },
//   { "id": "country-angola", "label": "Angola", "type": "Country" },
//   { "id": "country-botswana", "label": "Botswana", "type": "Country" },
//   { "id": "country-burundi", "label": "Burundi", "type": "Country" },
//   { "id": "country-chad", "label": "Chad", "type": "Country" },
//   { "id": "country-drc", "label": "Democratic Republic of the Congo (DRC)", "type": "Country" },
//   { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//   { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//   { "id": "country-eritrea", "label": "Eritrea", "type": "Country" },
//   { "id": "country-ethiopia", "label": "Ethiopia", "type": "Country" },
//   { "id": "country-ghana", "label": "Ghana", "type": "Country" },
//   { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//   { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//   { "id": "country-liberia", "label": "Liberia", "type": "Country" },
//   { "id": "country-libya", "label": "Libya", "type": "Country" },
//   { "id": "country-mali", "label": "Mali", "type": "Country" },
//   { "id": "country-mauritania", "label": "Mauritania", "type": "Country" },
//   { "id": "country-mauritius", "label": "Mauritius", "type": "Country" },
//   { "id": "country-morocco", "label": "Morocco", "type": "Country" },
//   { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//   { "id": "country-namibia", "label": "Namibia", "type": "Country" },
//   { "id": "country-nigeria", "label": "Nigeria", "type": "Country" },
//   { "id": "country-congo", "label": "Republic of Congo (Congo-Brazzaville)", "type": "Country" },
//   { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//   { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//   { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//   { "id": "country-somaliland", "label": "Somaliland", "type": "Country" },
//   { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//   { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//   { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//   { "id": "country-uganda", "label": "Uganda", "type": "Country" },
//   { "id": "country-zambia", "label": "Zambia", "type": "Country" },
//   { "id": "country-zimbabwe", "label": "Zimbabwe", "type": "Country" },
  
//   { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//   { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//   { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//   { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//   { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//   { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//   { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//   { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//   { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//   { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//   { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
  
//   { "id": "sector-carbon-credits", "label": "Carbon Credits", "type": "Sector" },
//   { "id": "sector-construction", "label": "Construction", "type": "Sector" },
//   { "id": "sector-textiles", "label": "Textiles", "type": "Sector" },
//   { "id": "sector-manufacturing", "label": "Manufacturing", "type": "Sector" },
//   { "id": "sector-oil-and-gas", "label": "Oil and Gas", "type": "Sector" },
//   { "id": "sector-real-estate", "label": "Real Estate", "type": "Sector" },
//   { "id": "sector-tech", "label": "Tech", "type": "Sector" },
//   { "id": "sector-energy-and-renewable-projects", "label": "Energy and Renewable Projects", "type": "Sector" },
//   { "id": "sector-agriculture-and-food", "label": "Agriculture and Food", "type": "Sector" },
//   { "id": "sector-financial-services-and-security", "label": "Financial Services and Security", "type": "Sector" },
//   { "id": "sector-trade-relations", "label": "Trade Relations", "type": "Sector" },
//   { "id": "sector-marine-sector-ports-fisheries", "label": "Marine Sector, Ports, Fisheries", "type": "Sector" },
//   { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//   { "id": "sector-logistics-and-infrastructures", "label": "Logistics and Infrastructures", "type": "Sector" },
//   { "id": "sector-military-and-defense", "label": "Military and Defense", "type": "Sector" },
//   { "id": "sector-healthcare", "label": "Healthcare", "type": "Sector" },
//   { "id": "sector-airports", "label": "Airports", "type": "Sector" },
//   { "id": "sector-ict", "label": "ICT", "type": "Sector" }
//   ],
  
//   "edges": [
  
//   { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//   { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//   { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
  
//   { "source": "loc-djazair", "target": "country-libya", "label": "LOCATED_IN" },
//   { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//   { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//   { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//   { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//   { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//   { "source": "loc-banana", "target": "country-congo", "label": "LOCATED_IN" },
//   { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//   { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//   { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//   { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//   { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//   { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//   { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//   { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//   { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//   { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//   { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//   { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//   { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//   { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//   { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//   { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
  
//   { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//   { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//   { "source": "sector-mining", "target": "country-kenya", "label": "Sector" },
//   { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//   { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//   { "source": "sector-mining", "target": "country-tanzania", "label": "Sector" },
//   { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//   { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },
//   { "source": "sector-mining", "target": "country-angola", "label": "Sector" },
  
//   { "source": "entity-ihc", "target": "entity-irh", "label": "OWNS" },
//   { "source": "entity-irh", "target": "entity-ihc", "label": "IS_OWNED_BY" }
  
//   ]
//   };
  
// const InteractiveKnowledgeGraph = () => {
//   // --- State Variables ---
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] }); // FULL dataset
//   const [simulation, setSimulation] = useState(null); // Holds the D3 simulation object
//   const simulationRef = useRef(null); // Ref to keep track of simulation across renders for cleanup
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLegend, setShowLegend] = useState(true);
//   const [isBuildingNetwork, setIsBuildingNetwork] = useState(false);
//   const [visibleNodeIds, setVisibleNodeIds] = useState(new Set());
//   const [lastExpandedNodeId, setLastExpandedNodeId] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);

//   // Refs for D3 elements / behaviors
//   const svgRef = useRef(null);
//   const gRef = useRef(null);
//   const zoomRef = useRef(null);

//   // --- Configuration ---
//   const nodeColorScale = {
//         'Organization': '#4285F4', 'Country': '#EA4335', 'Location': '#FBBC05',
//         'Associated Entity': '#34A853', 'Sector': '#F4B400',
//     };
//   const edgeStyles = {
//         'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },
//         'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },
//         'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' },
//         'Sector': { stroke: '#B36F00', strokeWidth: 1, dasharray: '2,2' },
//         // --- Added styles ---
//         'OWNS': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' }, // Green, solid
//         'IS_OWNED_BY': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' }, // Same green, solid
//     };

//   // --- Effects ---

//   // Load initial full data only once
//   useEffect(() => {
//     const nodes = fullGraphData.nodes;
//     const links = fullGraphData.edges.map(edge => ({
//       ...edge, source: edge.source, target: edge.target, type: edge.label
//     }));
//     setGraphData({ nodes, links });
//   }, []);

//   // Initialize D3 zoom behavior once
//    useEffect(() => {
//        if (svgRef.current && !zoomRef.current) { // Ensure SVG exists before creating zoom
//            zoomRef.current = d3.zoom()
//                .scaleExtent([0.1, 8])
//                .on('zoom', (event) => {
//                    if (gRef.current) {
//                        d3.select(gRef.current).attr('transform', event.transform);
//                    }
//                });
//            d3.select(svgRef.current).call(zoomRef.current); // Attach zoom
//        }
//        // Optional: Re-attach if svgRef changes, though unlikely for a fixed container
//    }, []); // Runs once after initial render


//     // --- Node Click Handler (Memoized) ---
//     const handleNodeClick = useCallback((event, clickedNodeData) => {
//         event.stopPropagation();
//         const clickedId = clickedNodeData.id;

//         let nextVisibleIds;

//         if (!isBuildingNetwork) {
//             setIsBuildingNetwork(true);
//             const initialVisibleIds = new Set([clickedId]);
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId) initialVisibleIds.add(link.target);
//                 else if (link.target === clickedId) initialVisibleIds.add(link.source);
//             });
//             nextVisibleIds = initialVisibleIds;

//             const newHistory = [nextVisibleIds];
//             setHistory(newHistory);
//             setHistoryIndex(0);
//             setVisibleNodeIds(nextVisibleIds);
//             setLastExpandedNodeId(clickedId);

//         } else {
//             const currentVisibleIds = history[historyIndex];
//             const neighborsToExpand = new Set();
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId) neighborsToExpand.add(link.target);
//                 else if (link.target === clickedId) neighborsToExpand.add(link.source);
//             });

//             nextVisibleIds = new Set(currentVisibleIds);
//             neighborsToExpand.forEach(id => nextVisibleIds.add(id));
//             nextVisibleIds.add(clickedId);

//             if (nextVisibleIds.size > currentVisibleIds.size) {
//                 const newHistory = history.slice(0, historyIndex + 1);
//                 newHistory.push(nextVisibleIds);
//                 setHistory(newHistory);
//                 setHistoryIndex(newHistory.length - 1);
//                 setVisibleNodeIds(nextVisibleIds);
//                 setLastExpandedNodeId(clickedId);
//             } else {
//                 setLastExpandedNodeId(clickedId); // Highlight even if no new nodes
//             }
//         }
//     }, [isBuildingNetwork, graphData.links, history, historyIndex]); // Dependencies for useCallback


//    // --- D3 Rendering Function (Memoized) ---
//    // Removed simulation state update from here, managed in useEffect
//    const renderGraph = useCallback((nodes, links) => {
//         const container = d3.select(svgRef.current)?.node()?.parentNode;
//         if (!container) return null; // Return null if container not ready

//         const width = container.clientWidth || 1000;
//         const height = container.clientHeight || 700;

//         const svg = d3.select(svgRef.current)
//             .attr('width', '100%')
//             .attr('height', '100%')
//             .attr('viewBox', [0, 0, width, height])
//             .attr('preserveAspectRatio', 'xMidYMid meet');

//         // Ensure zoom is attached (should be by useEffect, but defensive check)
//         if(zoomRef.current) {
//             svg.call(zoomRef.current);
//         } else {
//              // Initialize zoom if it wasn't ready before
//              zoomRef.current = d3.zoom().scaleExtent([0.1, 8]).on('zoom', (event) => {
//                  if (gRef.current) d3.select(gRef.current).attr('transform', event.transform);
//              });
//              svg.call(zoomRef.current);
//         }

//         let g;
//         if (gRef.current) {
//             g = d3.select(gRef.current);
//             g.selectAll('*').remove();
//         } else {
//             g = svg.append('g');
//             gRef.current = g.node();
//         }

//         g.append('defs').append('marker') /* ... (marker definition) ... */
//             .attr('id', 'arrowhead').attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0)
//             .attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto')
//             .append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#999');

//         const simNodes = nodes.map(d => ({ ...d }));
//         const simLinks = links.map(d => ({ ...d }));

//         const link = g.append('g') /* ... (link rendering) ... */
//             .attr('class', 'links').selectAll('path').data(simLinks, d => `${d.source?.id || d.source}-${d.target?.id || d.target}-${d.type}`)
//             .join('path').attr('class', 'link').attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//             .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//             .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//             .attr('fill', 'none').attr('marker-end', 'url(#arrowhead)');

//         const node = g.append('g') /* ... (node rendering) ... */
//             .attr('class', 'nodes').selectAll('g').data(simNodes, d => d.id)
//             .join('g').attr('class', 'node').style('cursor', 'pointer')
//             .on('click', handleNodeClick) // Use the memoized handler
//             .call(d3.drag() /* ... drag handlers need access to simulation ... */
//                 .on('start', dragstarted)
//                 .on('drag', dragged)
//                 .on('end', dragended)
//             );

//         node.append('circle') /* ... (circle rendering) ... */
//             .attr('r', 12).attr('fill', d => nodeColorScale[d.type] || '#ccc')
//             .attr('stroke', d => d.id === lastExpandedNodeId ? '#f00' : '#fff')
//             .attr('stroke-width', d => d.id === lastExpandedNodeId ? 3 : 1.5);

//         node.append('text') /* ... (text rendering) ... */
//              .attr('dx', 18).attr('dy', 5).text(d => d.label)
//              .style('font-size', '11px').style('font-family', 'sans-serif')
//              .style('paint-order', 'stroke').style('stroke', '#fff')
//              .style('stroke-width', '3px').style('stroke-linecap', 'butt')
//              .style('fill', '#333').attr('pointer-events', 'none');

//         node.append('title') /* ... (tooltip rendering) ... */
//              .text(d => { let tt = `${d.label}\nType: ${d.type}`; if(d.properties) tt += `\n${Object.entries(d.properties).map(([k,v])=>`${k}: ${v}`).join('\n')}`; return tt; });

//         const linkLabel = g.append('g') /* ... (link label rendering) ... */
//             .attr('class', 'link-labels').selectAll('text').data(simLinks, d => `${d.source?.id || d.source}-${d.target?.id || d.target}-${d.type}`)
//             .join("text").attr('class', 'link-label').attr('dy', -5)
//             .style('font-size', '9px').style('font-family', 'sans-serif')
//             .style('text-anchor', 'middle').attr('pointer-events', 'none').text(d => d.type);

//         // --- Simulation Setup ---
//         // Stop previous simulation IF it exists before creating a new one
//         if (simulationRef.current) {
//             simulationRef.current.stop();
//         }
//         const newSimulation = d3.forceSimulation(simNodes)
//             .force('link', d3.forceLink(simLinks).id(d => d.id).distance(isBuildingNetwork ? 160 : 130).strength(0.4))
//             .force('charge', d3.forceManyBody().strength(isBuildingNetwork ? -700 : -450))
//             .force('center', d3.forceCenter(width / 2, height / 2))
//             .force('collision', d3.forceCollide().radius(isBuildingNetwork ? 45 : 35))
//             .on('tick', ticked);

//         simulationRef.current = newSimulation; // Store ref to current simulation

//         function ticked() { /* ... (tick logic updates positions based on newSimulation) ... */
//             if (!simNodes.length || !gRef.current) return;
//              link.attr('d', d => {
//                 if (!d.source?.x || !d.target?.x) return "M0,0";
//                 const dx = d.target.x - d.source.x, dy = d.target.y - d.source.y;
//                 const gamma = Math.atan2(dy, dx); const r=12, arrowOffset=8;
//                 const sx = d.source.x + Math.cos(gamma)*(r+1.5), sy = d.source.y + Math.sin(gamma)*(r+1.5);
//                 const tx = d.target.x - Math.cos(gamma)*(r+1.5+arrowOffset), ty = d.target.y - Math.sin(gamma)*(r+1.5+arrowOffset);
//                 if(isNaN(sx+sy+tx+ty) || (dx*dx+dy*dy < (r*2)**2)) return "M0,0";
//                 return `M${sx},${sy}L${tx},${ty}`;
//              });
//              node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);
//              linkLabel.attr('x', d=>(d.source?.x+d.target?.x)/2||0).attr('y', d=>(d.source?.y+d.target?.y)/2||0);
//         }
//         // --- Drag Handlers need access to the 'newSimulation' instance ---
//         function dragstarted(event, d) { if (!event.active) newSimulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }
//         function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
//         function dragended(event, d) { if (!event.active) newSimulation.alphaTarget(0); /* Keep fixed */ }

//         // Return the simulation instance if needed elsewhere, though managing via ref is safer
//         return newSimulation;

//     }, [isBuildingNetwork, nodeColorScale, edgeStyles, handleNodeClick, lastExpandedNodeId]); // Dependencies


//   // Main effect for determining data and calling renderGraph
//   useEffect(() => {
//     // Stop previous simulation before calculating new data
//     if (simulationRef.current) {
//         simulationRef.current.stop();
//     }

//     let nodesToRender = [];
//     let linksToRender = [];

//     // Calculate nodes/links based on mode and state
//      if (isBuildingNetwork) {
//         if (visibleNodeIds.size > 0) {
//             nodesToRender = graphData.nodes.filter(n => visibleNodeIds.has(n.id));
//             linksToRender = graphData.links.filter(link => visibleNodeIds.has(link.source) && visibleNodeIds.has(link.target));
//         } else { nodesToRender = []; linksToRender = []; }
//     } else {
//         // Apply filters (same logic as before)
//         nodesToRender = [...graphData.nodes]; linksToRender = [...graphData.links];
//         if (selectedNodeType !== 'all') { /* ... filter nodes ... */ nodesToRender = nodesToRender.filter(node => node.type === selectedNodeType); const nodeIds = new Set(nodesToRender.map(node => node.id)); linksToRender = linksToRender.filter(link => nodeIds.has(link.source) && nodeIds.has(link.target));}
//         if (selectedEdgeType !== 'all') { /* ... filter links ... */ linksToRender = linksToRender.filter(link => link.type === selectedEdgeType); const nodeIdsInLinks = new Set(); linksToRender.forEach(link => { nodeIdsInLinks.add(link.source); nodeIdsInLinks.add(link.target); }); nodesToRender = nodesToRender.filter(node => nodeIdsInLinks.has(node.id));}
//         if (searchTerm) { /* ... filter search ... */ const ls = searchTerm.toLowerCase(); nodesToRender = nodesToRender.filter(node => node.label.toLowerCase().includes(ls) || node.type.toLowerCase().includes(ls)); const nodeIds = new Set(nodesToRender.map(node => node.id)); linksToRender = linksToRender.filter(link => nodeIds.has(link.source) && nodeIds.has(link.target));}
//     }

//     // Call the rendering function
//     if (nodesToRender.length > 0 || isBuildingNetwork) {
//         renderGraph(nodesToRender, linksToRender); // This will create and store the new simulation in simulationRef
//     } else {
//         d3.select(svgRef.current).selectChildren().remove(); // Clear SVG if no data
//         if (simulationRef.current) { // Ensure simulation is stopped if clearing
//             simulationRef.current.stop();
//             simulationRef.current = null;
//         }
//     }

//     // Cleanup function for the effect itself
//     return () => {
//       if (simulationRef.current) {
//         simulationRef.current.stop();
//       }
//     };
//   // *** REMOVED renderGraph from this dependency array ***
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, isBuildingNetwork, visibleNodeIds]);


//   // --- UI Options ---
//   const nodeTypeOptions = [ /* ... same ... */
//         { value: 'all', label: 'All Node Types' }, { value: 'Organization', label: 'Organization' },
//         { value: 'Country', label: 'Country' }, { value: 'Location', label: 'Location' },
//         { value: 'Associated Entity', label: 'Associated Entity' }, { value: 'Sector', label: 'Sector' },
//     ];
//   const edgeTypeOptions = [ /* ... same ... */
//         { value: 'all', label: 'All Relationship Types' }, { value: 'OPERATES_AT', label: 'OPERATES_AT' },
//         { value: 'LOCATED_IN', label: 'LOCATED_IN' }, { value: 'Current Investments In', label: 'Current Investments In' },
//         { value: 'Sector', label: 'Sector' },
//                 // --- Added options ---
//         { value: 'OWNS', label: 'OWNS' },
//         { value: 'IS_OWNED_BY', label: 'IS_OWNED_BY' },
//     ];

//   // --- UI Event Handlers ---
//   const handleReset = () => { /* ... (same reset logic including history) ... */
//       setIsBuildingNetwork(false); setVisibleNodeIds(new Set()); setHistory([]); setHistoryIndex(-1);
//       setSelectedNodeType('all'); setSelectedEdgeType('all'); setSearchTerm(''); setLastExpandedNodeId(null);
//       if (svgRef.current && zoomRef.current) d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//   };
//   const handleExitBuildMode = () => { /* ... (same exit logic including history reset) ... */
//       setIsBuildingNetwork(false); setVisibleNodeIds(new Set()); setHistory([]); setHistoryIndex(-1);
//       setLastExpandedNodeId(null);
//       if (svgRef.current && zoomRef.current) d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//   };
//   const handleUndo = () => { /* ... (same undo logic) ... */
//       if (!isBuildingNetwork || historyIndex <= 0) return;
//       const newIndex = historyIndex - 1; setHistoryIndex(newIndex); setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null);
//   };
//   const handleRedo = () => { /* ... (same redo logic) ... */
//       if (!isBuildingNetwork || historyIndex >= history.length - 1) return;
//       const newIndex = historyIndex + 1; setHistoryIndex(newIndex); setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null);
//   };

//   // --- JSX ---
//   return (
//     <div className="flex flex-col h-screen">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10 print:hidden">
//         <h1 className="text-xl font-semibold mb-3">Interactive Knowledge Graph</h1>
//         {/* Mode Indicator & History Controls */}
//          {isBuildingNetwork && (
//             <div className="mb-2 p-2 bg-green-100 border border-green-300 rounded text-sm flex flex-wrap justify-between items-center gap-2">
//                 <span>Build Mode ({visibleNodeIds.size} nodes). Click nodes to expand.</span>
//                  <div className="flex items-center gap-2">
//                      <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                         onClick={handleUndo} disabled={historyIndex <= 0} title="Undo last expansion">Undo</button>
//                      <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                         onClick={handleRedo} disabled={historyIndex >= history.length - 1} title="Redo expansion">Redo</button>
//                      <button className="text-green-700 hover:text-green-900 text-xs font-medium" onClick={handleExitBuildMode} title="Return to filtered/overview mode">(Exit Build Mode)</button>
//                  </div>
//             </div>
//          )}
//         {/* Filters & Search Area */}
//         <div className={`flex flex-wrap items-end gap-x-4 gap-y-2 ${isBuildingNetwork ? 'opacity-50 pointer-events-none' : ''}`}>
//             {/* Filters */}
//             <div><label htmlFor="ntf" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label><select id="ntf" className="w-48 p-1.5 border border-gray-300 rounded text-sm" value={selectedNodeType} onChange={e=>setSelectedNodeType(e.target.value)} disabled={isBuildingNetwork}>{nodeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
//             <div><label htmlFor="etf" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label><select id="etf" className="w-52 p-1.5 border border-gray-300 rounded text-sm" value={selectedEdgeType} onChange={e=>setSelectedEdgeType(e.target.value)} disabled={isBuildingNetwork}>{edgeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
//             <div><label htmlFor="si" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes</label><input id="si" type="text" className="w-48 p-1.5 border border-gray-300 rounded text-sm" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Name or type..." disabled={isBuildingNetwork}/></div>
//         </div>
//          {/* Action Buttons Area */}
//          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
//              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm" onClick={handleReset} title="Reset filters, search, and exit build mode">Reset All</button>
//              <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm" onClick={() => setShowLegend(!showLegend)}>{showLegend ? 'Hide Legend' : 'Show Legend'}</button>
//          </div>
//         {/* Legend */}
//         {showLegend && (
//              <div className="bg-white p-3 rounded border mt-3 text-xs shadow max-w-4xl">
//                 {/* Legend content structure same as before */}
//                 <h3 className="font-semibold mb-2 text-sm">Legend</h3>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
//                     <div><h4 className="font-medium mb-1">Node Types</h4><div className="flex flex-wrap gap-x-4 gap-y-1">{nodeTypeOptions.filter(o=>o.value !== 'all').map(o=><div key={o.value} className="flex items-center"><div className="w-3 h-3 R mr-1.5 f" style={{ backgroundColor: nodeColorScale[o.value] || '#ccc' }}></div><span>{o.label}</span></div>)}</div></div>
//                     <div><h4 className="font-medium mb-1">Relationship Types</h4><div className="flex flex-wrap gap-x-4 gap-y-2">{edgeTypeOptions.filter(o=>o.value !== 'all').map(o=>{ const s = edgeStyles[o.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' }; return (<div key={o.value} className="flex items-center"><svg width="30" height="8" className="mr-1.5 f"><line x1="0" y1="4" x2="30" y2="4" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeDasharray={s.dasharray}/><polygon points="30,4 25,2 25,6" fill={s.stroke} /></svg><span>{o.label}</span></div>); })}</div></div>
//                 </div>
//                 <div className="mt-3 text-gray-500"><p>{isBuildingNetwork ? "Build Mode: Click nodes to expand. Use Undo/Redo. " : "Overview Mode: Click node to start building. Use filters/search. "} Drag nodes. Scroll/pinch to zoom.</p></div>
//             </div>
//         )}
//       </div>
//       {/* Graph Container */}
//       <div className="flex-grow bg-gray-50 border-t border-gray-200 overflow-hidden relative">
//         <svg ref={svgRef} id="graph-container" className="w-full h-full"></svg>
//          {graphData.nodes.length === 0 && (<div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">Loading...</div>)}
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;














// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as d3 from 'd3';

// // --- Define the Combined Graph Data ---
// const fullGraphData = {
//   "nodes": [
//           // --- Entities ---
//           {
//             "id": "org-adports",
//             "label": "AD Ports Group",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Maritime Services", "Industrial Zones"],
//               "subType": "Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "org-dpworld",
//             "label": "DP World",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Terminals", "Supply Chain Management"],
//               "subType": "Global Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "entity-ihc",
//             "label": "IHC (International Holding Company)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed Conglomerate)",
//               "primaryFocus": ["Investment Holding", "Diversified Conglomerate"],
//               "subType": "Holding Company"
//             }
//           },
//           {
//             "id": "entity-irh",
//             "label": "IRH (International Resources Holding)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial",
//               "primaryFocus": ["Resources", "Mining Investment"],
//               "subType": "Investment Arm / Subsidiary",
//               "parentCompany": "IHC"
//             }
//           },
//           {
//             "id": "org-pic",
//             "label": "Public Investment Corporation SOC Ltd (PIC)",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "South Africa",
//               "entityNature": "State-Owned Corporation (SOC)",
//               "primaryFocus": ["Investment Management", "Public Funds"],
//               "subType": "State-Owned Investment Corporation"
//             }
//           },
//           {
//             "id": "gov-som-fisheries",
//             "label": "Somali Ministry of Fisheries & Blue Economy",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Somalia",
//               "entityNature": "Government Ministry",
//               "primaryFocus": ["Fisheries", "Maritime Economy", "Regulation"],
//               "subType": "National Ministry"
//             }
//           },
//           {
//             "id": "org-beng-commerce",
//             "label": "Benghazi Chamber of Commerce",
//             "type": "Organization",
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Business Association",
//               "primaryFocus": ["Commerce", "Business Development"],
//               "subType": "Chamber of Commerce"
//             }
//           },
//           {
//             "id": "org-emaar",
//             "label": "Emaar",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed)",
//               "primaryFocus": ["Real Estate Development", "Property Management"],
//               "subType": "Development Company"
//             }
//           },
//           {
//             "id": "gov-lib-devagency",
//             "label": "National Development Agency (Libya)",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Government Agency",
//               "primaryFocus": ["National Development", "Project Management"],
//               "subType": "Development Agency",
//               "notes": "Reported as 'Hafter managed' in source"
//             }
//           },
//           {
//             "id": "org-gci",
//             "label": "GCI",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Investment Entity (Inferred)",
//               "primaryFocus": ["Carbon Credits", "Environmental Projects", "Forestry"],
//               "notes": "Associated with UAE takeover of African forests for Blue Carbon deal"
//             }
//           },
//           {
//             "id": "org-eap",
//             "label": "EAP",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Agricultural Program/Entity (Inferred, Public-Private)",
//               "primaryFocus": ["Agriculture", "Farmland", "Bilateral Agreements"],
//               "notes": "Associated with UAE farmlands across Africa"
//             }
//           },
//           {
//             "id": "org-tayan",
//             "label": "TAYAN",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Security/Military Entity (Inferred)",
//               "primaryFocus": ["Security Agreements", "Military Training"],
//               "notes": "Associated with UAE MoUs focused on anti-terrorism & military training"
//             }
//           },
//           {
//             "id": "org-masdar",
//             "label": "Masdar",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Owned)",
//               "primaryFocus": ["Renewable Energy", "Sustainable Development", "Energy Transition"],
//               "subType": "Renewable Energy Company",
//               "ownership": "Abu Dhabi Government (via Mubadala, ADNOC, TAQA)"
//             }
//           },
//           {
//             "id": "org-primeragold",
//             "label": "Primera Gold",
//             "type": "Organization",
//             "properties": {
//               "entityNature": "Commercial",
//               "primaryFocus": ["Mining", "Gold Trading"],
//               "subType": "Mining Company / Trading Firm",
//               "ownership": "IHC",
//               "operationalRegion": ["DRC"]
//             }
//           },
//           // --- Countries ---
//           { "id": "country-algeria", "label": "Algeria", "type": "Country" },
//           { "id": "country-angola", "label": "Angola", "type": "Country" },
//           { "id": "country-botswana", "label": "Botswana", "type": "Country" },
//           { "id": "country-burundi", "label": "Burundi", "type": "Country" },
//           { "id": "country-chad", "label": "Chad", "type": "Country" },
//           { "id": "country-drc", "label": "Democratic Republic of the Congo (DRC)", "type": "Country" },
//           { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//           { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//           { "id": "country-eritrea", "label": "Eritrea", "type": "Country" },
//           { "id": "country-ethiopia", "label": "Ethiopia", "type": "Country" },
//           { "id": "country-ghana", "label": "Ghana", "type": "Country" },
//           { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//           { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//           { "id": "country-liberia", "label": "Liberia", "type": "Country" },
//           { "id": "country-libya", "label": "Libya", "type": "Country" },
//           { "id": "country-mali", "label": "Mali", "type": "Country" },
//           { "id": "country-mauritania", "label": "Mauritania", "type": "Country" },
//           { "id": "country-mauritius", "label": "Mauritius", "type": "Country" },
//           { "id": "country-morocco", "label": "Morocco", "type": "Country" },
//           { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//           { "id": "country-namibia", "label": "Namibia", "type": "Country" },
//           { "id": "country-nigeria", "label": "Nigeria", "type": "Country" },
//           { "id": "country-congo", "label": "Republic of Congo (Congo-Brazzaville)", "type": "Country" },
//           { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//           { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//           { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//           { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//           { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//           { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//           { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//           { "id": "country-uganda", "label": "Uganda", "type": "Country" },
//           { "id": "country-zambia", "label": "Zambia", "type": "Country" },
//           { "id": "country-zimbabwe", "label": "Zimbabwe", "type": "Country" },
//           // --- Locations ---
//           { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"country": "Algeria", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"country": "Guinea", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"country": "Republic of Congo (Congo-Brazzaville)", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"country": "DRC", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"country": "Angola", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"country": "Kenya", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"country": "Rwanda", "kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//           { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"country": "Somalia", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"country": "Somaliland", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"country": "Djibouti", "kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//           { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"country": "Tanzania", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"country": "Mozambique", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"country": "Sudan", "kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"country": "South Africa", "kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           {
//             "id": "loc-elmreisa",
//             "label": "Elmreisa Free Zone (EFZ)",
//             "type": "Location",
//             "properties": {
//               "country": "Libya",
//               "kind": "Free Zone",
//               "primaryFocus": ["Economic Development", "Trade"],
//               "status": "Under Development/Planned"
//             }
//           },
//           // --- Sectors ---
//           { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//           { "id": "sector-fisheries-blue-economy", "label": "Fisheries & Blue Economy", "type": "Sector" },
//           { "id": "sector-ports-maritime", "label": "Ports & Maritime", "type": "Sector" },
//           { "id": "sector-development-project", "label": "Development Project", "type": "Sector" },
//           { "id": "sector-free-zone", "label": "Free Zone", "type": "Sector" },
//           { "id": "sector-carbon-forestry", "label": "Carbon & Forestry", "type": "Sector" },
//           { "id": "sector-agriculture-farmland", "label": "Agriculture & Farmland", "type": "Sector" },
//           { "id": "sector-security-military", "label": "Security & Military", "type": "Sector" },
//           { "id": "sector-energy-transition", "label": "Energy Transition", "type": "Sector" },
//           { "id": "sector-trade-investment", "label": "Trade & Investment", "type": "Sector" },
//           { "id": "sector-energy", "label": "Energy", "type": "Sector" },
//           { "id": "sector-water", "label": "Water", "type": "Sector" },
//           { "id": "sector-agriculture", "label": "Agriculture", "type": "Sector" },
//           { "id": "sector-health", "label": "Health", "type": "Sector" },
//           { "id": "sector-airports", "label": "Airports", "type": "Sector" },
//           { "id": "sector-logistics", "label": "Logistics", "type": "Sector" },
//           { "id": "sector-ict", "label": "ICT", "type": "Sector" }
//   ],

//   "edges": [
//       // --- OPERATES_AT ---
//       { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//       { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//       // --- LOCATED_IN ---
//       { "source": "loc-djazair", "target": "country-algeria", "label": "LOCATED_IN" },
//       { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//       { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//       { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//       { "source": "loc-banana", "target": "country-drc", "label": "LOCATED_IN" },
//       { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//       { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//       { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//       { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//       { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//       { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//       { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//       { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//       { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//       { "source": "loc-elmreisa", "target": "country-libya", "label": "LOCATED_IN" },

//       // --- Existing Investment Links (Consider refining/replacing) ---
//       { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//       { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//       { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//       { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//       { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//       { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },

//       // --- Ownership Links ---
//       { "source": "entity-ihc", "target": "entity-irh", "label": "OWNS" },
//       { "source": "entity-irh", "target": "entity-ihc", "label": "IS_OWNED_BY" },

//       // --- NEW Edges from Text Block 1 Analysis ---
//       { "source": "entity-irh", "target": "country-kenya", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-tanzania", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-burundi", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zambia", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-angola", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zimbabwe", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "sector-mining", "label": "TARGETS_INVESTMENT_IN", "properties": {"amount_USD_B": 1, "year": 2024, "funding_source": "IHC"} },

//       // --- PLACEHOLDER for future edges ---

//     ]
// };


// const InteractiveKnowledgeGraph = () => {
//   // --- State Variables ---
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] });
//   const simulationRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLegend, setShowLegend] = useState(true);
//   const [isBuildingNetwork, setIsBuildingNetwork] = useState(false);
//   const [visibleNodeIds, setVisibleNodeIds] = useState(new Set());
//   const [lastExpandedNodeId, setLastExpandedNodeId] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   // **FIX**: Add state to track rendered node count for empty state message
//   const [renderedNodeCount, setRenderedNodeCount] = useState(0);


//   // Refs for D3 elements / behaviors
//   const svgRef = useRef(null);
//   const gRef = useRef(null);
//   const zoomRef = useRef(null);

//   // --- Configuration ---
//   const nodeColorScale = {
//         'Organization': '#4285F4', // Blue
//         'Country': '#EA4335',      // Red
//         'Location': '#FBBC05',     // Yellow
//         'Associated Entity': '#34A853', // Green
//         'Sector': '#F4B400',       // Orange
//         'Government Body': '#800080', // Purple (Added)
//   };

//   const edgeStyles = {
//         'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },
//         'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },
//         'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' },
//         'OWNS': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' },
//         'IS_OWNED_BY': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' },
//         'TARGETS_INVESTMENT_IN': { stroke: '#FF69B4', strokeWidth: 1.5, dasharray: '4,4'}
//   };

//   // --- Effects ---

//   // Load initial full data only once and process it for the state
//   useEffect(() => {
//     const validNodes = fullGraphData.nodes.filter(n => n && n.id);
//     const nodeIds = new Set(validNodes.map(n => n.id));
//     const validEdges = fullGraphData.edges.filter(e => {
//         if (!e || !e.source || !e.target || !e.label) { return false; }
//         if (!nodeIds.has(e.source)) { return false; }
//         if (!nodeIds.has(e.target)) { return false; }
//         return true;
//     });
//     const linksForState = validEdges.map(edge => ({ ...edge, source: edge.source, target: edge.target, type: edge.label }));
//     setGraphData({ nodes: validNodes, links: linksForState });
//     // console.log("Initial graph data loaded and processed.");
//   }, []);

//   // Initialize D3 zoom behavior once
//    useEffect(() => {
//        if (svgRef.current && !zoomRef.current) {
//            zoomRef.current = d3.zoom()
//                .scaleExtent([0.1, 8])
//                .on('zoom', (event) => { if (gRef.current) { d3.select(gRef.current).attr('transform', event.transform); } });
//            d3.select(svgRef.current).call(zoomRef.current);
//            d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//        }
//    }, []);

//     // --- Node Click Handler (Memoized) ---
//     const handleNodeClick = useCallback((event, clickedNodeData) => {
//         event.stopPropagation();
//         if (!graphData || !graphData.links) { return; }
//         const clickedId = clickedNodeData.id;
//         let nextVisibleIds;

//         if (!isBuildingNetwork) {
//             setIsBuildingNetwork(true);
//             const initialVisibleIds = new Set([clickedId]);
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId && link.target) initialVisibleIds.add(link.target);
//                 else if (link.target === clickedId && link.source) initialVisibleIds.add(link.source);
//             });
//             nextVisibleIds = new Set([...initialVisibleIds].filter(id => id != null));
//             const newHistory = [nextVisibleIds];
//             setHistory(newHistory); setHistoryIndex(0);
//             setVisibleNodeIds(nextVisibleIds); setLastExpandedNodeId(clickedId);
//         } else {
//              const currentVisibleIds = history[historyIndex];
//              if (!currentVisibleIds) { return; }
//             const neighborsToExpand = new Set();
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId && link.target && !currentVisibleIds.has(link.target)) { neighborsToExpand.add(link.target); }
//                 else if (link.target === clickedId && link.source && !currentVisibleIds.has(link.source)) { neighborsToExpand.add(link.source); }
//             });
//             const validNeighbors = new Set([...neighborsToExpand].filter(id => id != null));
//             if (validNeighbors.size > 0) {
//                 nextVisibleIds = new Set([...currentVisibleIds, ...validNeighbors]);
//                 nextVisibleIds.add(clickedId);
//                 const newHistory = history.slice(0, historyIndex + 1); newHistory.push(nextVisibleIds);
//                 setHistory(newHistory); setHistoryIndex(newHistory.length - 1);
//                 setVisibleNodeIds(nextVisibleIds); setLastExpandedNodeId(clickedId);
//             } else {
//                 setLastExpandedNodeId(clickedId);
//             }
//         }
//     }, [isBuildingNetwork, graphData, history, historyIndex]);


//    // --- D3 Rendering Function (Memoized) ---
//    const renderGraph = useCallback((nodes, links) => { // Expects links with object references
//         const container = d3.select(svgRef.current)?.node()?.parentNode;
//         if (!container || !svgRef.current) { return null; }
//         const width = container.clientWidth || 1000; const height = container.clientHeight || 700;
//         const svg = d3.select(svgRef.current).attr('width', '100%').attr('height', '100%').attr('viewBox', [0, 0, width, height]).attr('preserveAspectRatio', 'xMidYMid meet');

//         if(zoomRef.current) { svg.call(zoomRef.current); } else { return null; /* Should be initialized */ }
//         let g;
//         if (gRef.current) { g = d3.select(gRef.current); g.selectAll('*').remove(); } else { g = svg.append('g'); gRef.current = g.node(); }
//         if (zoomRef.current) { const currentTransform = d3.zoomTransform(svg.node()); g.attr('transform', currentTransform); }

//         g.append('defs').append('marker').attr('id', 'arrowhead').attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#999');

//         const link = g.append('g').attr('class', 'links').selectAll('path').data(links, d => `${d.source.id}-${d.target.id}-${d.type}`).join('path').attr('class', 'link').attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb').attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1).attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0').attr('fill', 'none').attr('marker-end', 'url(#arrowhead)');
//         const node = g.append('g').attr('class', 'nodes').selectAll('g').data(nodes, d => d.id).join('g').attr('class', 'node').style('cursor', 'pointer').on('click', handleNodeClick).call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));
//         node.append('circle').attr('r', 12).attr('fill', d => nodeColorScale[d.type] || '#ccc').attr('stroke', d => d.id === lastExpandedNodeId ? '#f00' : '#fff').attr('stroke-width', d => d.id === lastExpandedNodeId ? 3 : 1.5);
//         node.append('text').attr('dx', 18).attr('dy', 5).text(d => d.label).style('font-size', '11px').style('font-family', 'sans-serif').style('paint-order', 'stroke').style('stroke', '#fff').style('stroke-width', '3px').style('stroke-linecap', 'butt').style('fill', '#333').attr('pointer-events', 'none');
//         node.append('title').text(d => { let tt = `${d.label}\nType: ${d.type}`; if(d.properties) { tt += `\n--- Properties ---\n${Object.entries(d.properties).map(([k,v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`).join('\n')}`; } return tt; });
//         const linkLabel = g.append('g').attr('class', 'link-labels').selectAll('text').data(links, d => `${d.source.id}-${d.target.id}-${d.type}`).join("text").attr('class', 'link-label').attr('dy', -5).style('font-size', '9px').style('font-family', 'sans-serif').style('fill', '#555').style('text-anchor', 'middle').attr('pointer-events', 'none').text(d => d.type);

//         if (simulationRef.current) { simulationRef.current.stop(); }
//         const newSimulation = d3.forceSimulation(nodes)
//             .force('link', d3.forceLink(links).id(d => d.id).distance(isBuildingNetwork ? 160 : 130).strength(0.4))
//             .force('charge', d3.forceManyBody().strength(isBuildingNetwork ? -700 : -450))
//             .force('center', d3.forceCenter(width / 2, height / 2))
//             .force('collision', d3.forceCollide().radius(isBuildingNetwork ? 45 : 35))
//             .on('tick', ticked);
//         simulationRef.current = newSimulation;

//         function ticked() {
//              if (!gRef.current || !nodes.length) return;
//              link.attr('d', d => { if (!d.source || !d.target || isNaN(d.source.x) || isNaN(d.source.y) || isNaN(d.target.x) || isNaN(d.target.y)) return "M0,0"; const dx = d.target.x - d.source.x, dy = d.target.y - d.source.y; const gamma = Math.atan2(dy, dx); const r=12, arrowOffset=8; const sx = d.source.x + Math.cos(gamma)*(r+1.5), sy = d.source.y + Math.sin(gamma)*(r+1.5); const tx = d.target.x - Math.cos(gamma)*(r+1.5+arrowOffset), ty = d.target.y - Math.sin(gamma)*(r+1.5+arrowOffset); if(isNaN(sx+sy+tx+ty) || (dx*dx+dy*dy < (r*2)**2)) return "M0,0"; return `M${sx},${sy}L${tx},${ty}`; });
//              node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);
//              linkLabel.attr('x', d=>(d.source && d.target && !isNaN(d.source.x) && !isNaN(d.target.x)) ? (d.source.x+d.target.x)/2 : 0).attr('y', d=>(d.source && d.target && !isNaN(d.source.y) && !isNaN(d.target.y)) ? (d.source.y+d.target.y)/2 : 0);
//         }
//         function dragstarted(event, d) { if (!event.active) newSimulation.alphaTarget(0.3).restart(); d.fx = d.x; d.fy = d.y; }
//         function dragged(event, d) { d.fx = event.x; d.fy = event.y; }
//         function dragended(event, d) { if (!event.active) newSimulation.alphaTarget(0); }

//     }, [isBuildingNetwork, nodeColorScale, edgeStyles, handleNodeClick, lastExpandedNodeId, historyIndex]);


//   // Main effect for determining data and calling renderGraph
//   useEffect(() => {
//     if (!graphData || !graphData.nodes || !graphData.links) { return; }
//     if (simulationRef.current) { simulationRef.current.stop(); }

//     let nodesToRender = [];
//     let linksFromState = []; // Links with string IDs from graphData state

//     // --- Determine Nodes and Links based on Mode/Filters ---
//     if (isBuildingNetwork) {
//         if (visibleNodeIds.size > 0) {
//             nodesToRender = graphData.nodes.filter(n => visibleNodeIds.has(n.id));
//             const currentVisibleSet = new Set(nodesToRender.map(n => n.id));
//             linksFromState = graphData.links.filter(link => currentVisibleSet.has(link.source) && currentVisibleSet.has(link.target));
//         } else { nodesToRender = []; linksFromState = []; }
//     } else {
//         // Overview Mode: Apply filters
//         let potentialNodes = [...graphData.nodes];
//         let potentialLinks = [...graphData.links];
//         let nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));
//         if (selectedNodeType !== 'all') { potentialNodes = potentialNodes.filter(node => node.type === selectedNodeType); nodeIdsToKeep = new Set(potentialNodes.map(node => node.id)); potentialLinks = potentialLinks.filter(link => nodeIdsToKeep.has(link.source) && nodeIdsToKeep.has(link.target)); }
//         if (selectedEdgeType !== 'all') { potentialLinks = potentialLinks.filter(link => link.type === selectedEdgeType); const nodeIdsInFilteredLinks = new Set(); potentialLinks.forEach(link => { nodeIdsInFilteredLinks.add(link.source); nodeIdsInFilteredLinks.add(link.target); }); potentialNodes = potentialNodes.filter(node => nodeIdsInFilteredLinks.has(node.id)); }
//         if (searchTerm) { const lowerSearchTerm = searchTerm.toLowerCase(); potentialNodes = potentialNodes.filter(node => node.label.toLowerCase().includes(lowerSearchTerm) || node.type.toLowerCase().includes(lowerSearchTerm) || (node.properties && Object.values(node.properties).some(val => String(val).toLowerCase().includes(lowerSearchTerm)))); nodeIdsToKeep = new Set(potentialNodes.map(node => node.id)); potentialLinks = potentialLinks.filter(link => nodeIdsToKeep.has(link.source) && nodeIdsToKeep.has(link.target)); }
//         nodesToRender = potentialNodes; linksFromState = potentialLinks;
//     }

//     // **FIX**: Update renderedNodeCount state
//     setRenderedNodeCount(nodesToRender.length);

//     // --- Prepare final data for D3's forceSimulation ---
//     const nodeMap = new Map(nodesToRender.map(node => [node.id, node]));
//     const finalLinksForD3 = linksFromState.map(link => ({ ...link, source: nodeMap.get(link.source), target: nodeMap.get(link.target) })).filter(link => link.source && link.target);

//     // --- Call Rendering ---
//     if (nodesToRender.length > 0 || isBuildingNetwork) {
//         renderGraph(nodesToRender, finalLinksForD3);
//     } else {
//         if (svgRef.current) { d3.select(svgRef.current).select('g').remove(); gRef.current = null; }
//         if (simulationRef.current) { simulationRef.current.stop(); simulationRef.current = null; }
//     }

//     // Cleanup function
//     return () => { if (simulationRef.current) { simulationRef.current.stop(); } };
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, isBuildingNetwork, visibleNodeIds, renderGraph]); // renderGraph added back as it's stable with useCallback

//   // --- UI Options ---
//   const nodeTypeOptions = [ { value: 'all', label: 'All Node Types' }, { value: 'Organization', label: 'Organization' }, { value: 'Country', label: 'Country' }, { value: 'Location', label: 'Location' }, { value: 'Associated Entity', label: 'Associated Entity' }, { value: 'Sector', label: 'Sector' }, { value: 'Government Body', label: 'Government Body' }, ];
//   const edgeTypeOptions = [ { value: 'all', label: 'All Relationship Types' }, { value: 'OPERATES_AT', label: 'OPERATES_AT' }, { value: 'LOCATED_IN', label: 'LOCATED_IN' }, { value: 'Current Investments In', label: 'Current Investments In' }, { value: 'OWNS', label: 'OWNS' }, { value: 'IS_OWNED_BY', label: 'IS_OWNED_BY' }, { value: 'TARGETS_INVESTMENT_IN', label: 'Targets Investment In' }, ];

//   // --- UI Event Handlers ---
//   const handleReset = () => { setIsBuildingNetwork(false); setVisibleNodeIds(new Set()); setHistory([]); setHistoryIndex(-1); setSelectedNodeType('all'); setSelectedEdgeType('all'); setSearchTerm(''); setLastExpandedNodeId(null); if (svgRef.current && zoomRef.current) { d3.select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity); } };
//   const handleExitBuildMode = () => { setIsBuildingNetwork(false); setVisibleNodeIds(new Set()); setHistory([]); setHistoryIndex(-1); setLastExpandedNodeId(null); if (svgRef.current && zoomRef.current) { d3.select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity); } };
//   const handleUndo = () => { if (!isBuildingNetwork || historyIndex <= 0) return; const newIndex = historyIndex - 1; setHistoryIndex(newIndex); setVisibleNodeIds(history[newIndex]); setLastExpandedNodeId(null); };
//   const handleRedo = () => { if (!isBuildingNetwork || historyIndex >= history.length - 1) return; const newIndex = historyIndex + 1; setHistoryIndex(newIndex); setVisibleNodeIds(history[newIndex]); setLastExpandedNodeId(null); };

//   // --- JSX ---
//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10 print:hidden">
//         <h1 className="text-xl font-semibold mb-3 text-gray-800">Interactive Knowledge Graph: UAE Investments/Operations</h1>
//         {/* Mode Indicator & History Controls */}
//          {isBuildingNetwork && ( <div className="mb-2 p-2 bg-blue-100 border border-blue-300 rounded text-sm flex flex-wrap justify-between items-center gap-2"> <span className="font-medium text-blue-800">Build Mode ({visibleNodeIds.size} nodes visible). Click nodes to expand network.</span> <div className="flex items-center gap-2"> <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleUndo} disabled={historyIndex <= 0} title="Undo last expansion (Ctrl+Z)">Undo</button> <button className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed" onClick={handleRedo} disabled={historyIndex >= history.length - 1} title="Redo expansion (Ctrl+Y)">Redo</button> <button className="text-blue-700 hover:text-blue-900 text-xs font-medium" onClick={handleExitBuildMode} title="Return to filtered/overview mode">(Exit Build Mode)</button> </div> </div> )}
//         {/* Filters & Search Area */}
//         <div className={`flex flex-wrap items-end gap-x-4 gap-y-2 ${isBuildingNetwork ? 'opacity-50 pointer-events-none' : ''}`}>
//             <div><label htmlFor="ntf" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label><select id="ntf" className="w-48 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500" value={selectedNodeType} onChange={e=>setSelectedNodeType(e.target.value)} disabled={isBuildingNetwork}>{nodeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
//             <div><label htmlFor="etf" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label><select id="etf" className="w-52 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500" value={selectedEdgeType} onChange={e=>setSelectedEdgeType(e.target.value)} disabled={isBuildingNetwork}>{edgeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}</select></div>
//             <div><label htmlFor="si" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes/Properties</label><input id="si" type="text" className="w-48 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500" value={searchTerm} onChange={e=>setSearchTerm(e.target.value)} placeholder="Name, type, property..." disabled={isBuildingNetwork}/></div>
//         </div>
//          {/* Action Buttons Area */}
//          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
//              <button className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm font-medium shadow-sm" onClick={handleReset} title="Reset filters, search, zoom, and exit build mode">Reset All</button>
//              <button className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm" onClick={() => setShowLegend(!showLegend)}>{showLegend ? 'Hide Legend' : 'Show Legend'}</button>
//          </div>
//         {/* Legend */}
//         {showLegend && ( <div className="bg-white p-3 rounded border border-gray-200 mt-3 text-xs shadow-sm max-w-4xl"> <h3 className="font-semibold mb-2 text-sm text-gray-700">Legend</h3> <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3"> <div> <h4 className="font-medium mb-1 text-gray-600">Node Types</h4> <div className="flex flex-wrap gap-x-4 gap-y-1"> {nodeTypeOptions.filter(o => o.value !== 'all').map(o => ( <div key={o.value} className="flex items-center"> <div className="w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: nodeColorScale[o.value] || '#ccc' }}></div> <span>{o.label}</span> </div> ))} </div> </div> <div> <h4 className="font-medium mb-1 text-gray-600">Relationship Types</h4> <div className="flex flex-wrap gap-x-4 gap-y-2"> {edgeTypeOptions.filter(o => o.value !== 'all').map(o => { const s = edgeStyles[o.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' }; return ( <div key={o.value} className="flex items-center"> <svg width="30" height="8" className="mr-1.5 flex-shrink-0"> <line x1="0" y1="4" x2="25" y2="4" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeDasharray={s.dasharray}/> <polygon points="25,0 30,4 25,8" fill={s.stroke} /> </svg> <span>{o.label}</span> </div> ); })} </div> </div> </div> <div className="mt-3 pt-2 border-t border-gray-200 text-gray-500"> <p> {isBuildingNetwork ? "Build Mode: Click nodes to expand network. Use Undo/Redo. " : "Overview Mode: Use filters/search or click a node to enter Build Mode. "} Drag nodes to reposition. Scroll/pinch to zoom. Hover over nodes for details. </p> </div> </div> )}
//       </div>
//       {/* Graph Container */}
//       <div className="flex-grow border-t border-gray-200 overflow-hidden relative">
//         <svg ref={svgRef} id="graph-container" className="w-full h-full">
//            {/* g element will be appended here by D3 */}
//         </svg>
//          {/* Loading / Empty State Messages */}
//          {/* **FIX**: Use renderedNodeCount state here */}
//          {!isBuildingNetwork && graphData.nodes.length > 0 && renderedNodeCount === 0 && (
//              <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                 No nodes match the current filters.
//              </div>
//          )}
//          {isBuildingNetwork && visibleNodeIds.size === 0 && (
//               <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                  Click a node in Overview Mode to start building the network.
//               </div>
//           )}
//           {graphData.nodes.length === 0 && graphData.links.length === 0 && !isBuildingNetwork && (
//                <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                    Loading graph data...
//                </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;




















// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as d3 from 'd3';

// // --- Define the Combined Graph Data ---
// const fullGraphData = {
//   "nodes": [
//           // --- Entities ---
//           {
//             "id": "org-adports",
//             "label": "AD Ports Group",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Maritime Services", "Industrial Zones"],
//               "subType": "Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "org-dpworld",
//             "label": "DP World",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Terminals", "Supply Chain Management"],
//               "subType": "Global Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "entity-ihc",
//             "label": "IHC (International Holding Company)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed Conglomerate)",
//               "primaryFocus": ["Investment Holding", "Diversified Conglomerate"],
//               "subType": "Holding Company"
//             }
//           },
//           {
//             "id": "entity-irh",
//             "label": "IRH (International Resources Holding)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial",
//               "primaryFocus": ["Resources", "Mining Investment"],
//               "subType": "Investment Arm / Subsidiary",
//               "parentCompany": "IHC"
//             }
//           },
//           {
//             "id": "org-pic",
//             "label": "Public Investment Corporation SOC Ltd (PIC)",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "South Africa",
//               "entityNature": "State-Owned Corporation (SOC)",
//               "primaryFocus": ["Investment Management", "Public Funds"],
//               "subType": "State-Owned Investment Corporation"
//             }
//           },
//           {
//             "id": "gov-som-fisheries",
//             "label": "Somali Ministry of Fisheries & Blue Economy",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Somalia",
//               "entityNature": "Government Ministry",
//               "primaryFocus": ["Fisheries", "Maritime Economy", "Regulation"],
//               "subType": "National Ministry"
//             }
//           },
//           {
//             "id": "org-beng-commerce",
//             "label": "Benghazi Chamber of Commerce",
//             "type": "Organization",
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Business Association",
//               "primaryFocus": ["Commerce", "Business Development"],
//               "subType": "Chamber of Commerce"
//             }
//           },
//           {
//             "id": "org-emaar",
//             "label": "Emaar",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed)",
//               "primaryFocus": ["Real Estate Development", "Property Management"],
//               "subType": "Development Company"
//             }
//           },
//           {
//             "id": "gov-lib-devagency",
//             "label": "National Development Agency (Libya)",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Government Agency",
//               "primaryFocus": ["National Development", "Project Management"],
//               "subType": "Development Agency",
//               "notes": "Reported as 'Hafter managed' in source"
//             }
//           },
//           {
//             "id": "org-gci",
//             "label": "GCI",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Investment Entity (Inferred)",
//               "primaryFocus": ["Carbon Credits", "Environmental Projects", "Forestry"],
//               "notes": "Associated with UAE takeover of African forests for Blue Carbon deal"
//             }
//           },
//           {
//             "id": "org-eap",
//             "label": "EAP",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Agricultural Program/Entity (Inferred, Public-Private)",
//               "primaryFocus": ["Agriculture", "Farmland", "Bilateral Agreements"],
//               "notes": "Associated with UAE farmlands across Africa"
//             }
//           },
//           {
//             "id": "org-tayan",
//             "label": "TAYAN",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Security/Military Entity (Inferred)",
//               "primaryFocus": ["Security Agreements", "Military Training"],
//               "notes": "Associated with UAE MoUs focused on anti-terrorism & military training"
//             }
//           },
//           {
//             "id": "org-masdar",
//             "label": "Masdar",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Owned)",
//               "primaryFocus": ["Renewable Energy", "Sustainable Development", "Energy Transition"],
//               "subType": "Renewable Energy Company",
//               "ownership": "Abu Dhabi Government (via Mubadala, ADNOC, TAQA)"
//             }
//           },
//           {
//             "id": "org-primeragold",
//             "label": "Primera Gold",
//             "type": "Organization",
//             "properties": {
//               "entityNature": "Commercial",
//               "primaryFocus": ["Mining", "Gold Trading"],
//               "subType": "Mining Company / Trading Firm",
//               "ownership": "IHC",
//               "operationalRegion": ["DRC"]
//             }
//           },
//           // --- Countries ---
//           { "id": "country-algeria", "label": "Algeria", "type": "Country" },
//           { "id": "country-angola", "label": "Angola", "type": "Country" },
//           { "id": "country-botswana", "label": "Botswana", "type": "Country" },
//           { "id": "country-burundi", "label": "Burundi", "type": "Country" },
//           { "id": "country-chad", "label": "Chad", "type": "Country" },
//           { "id": "country-drc", "label": "Democratic Republic of the Congo (DRC)", "type": "Country" },
//           { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//           { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//           { "id": "country-eritrea", "label": "Eritrea", "type": "Country" },
//           { "id": "country-ethiopia", "label": "Ethiopia", "type": "Country" },
//           { "id": "country-ghana", "label": "Ghana", "type": "Country" },
//           { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//           { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//           { "id": "country-liberia", "label": "Liberia", "type": "Country" },
//           { "id": "country-libya", "label": "Libya", "type": "Country" },
//           { "id": "country-mali", "label": "Mali", "type": "Country" },
//           { "id": "country-mauritania", "label": "Mauritania", "type": "Country" },
//           { "id": "country-mauritius", "label": "Mauritius", "type": "Country" },
//           { "id": "country-morocco", "label": "Morocco", "type": "Country" },
//           { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//           { "id": "country-namibia", "label": "Namibia", "type": "Country" },
//           { "id": "country-nigeria", "label": "Nigeria", "type": "Country" },
//           { "id": "country-congo", "label": "Republic of Congo (Congo-Brazzaville)", "type": "Country" },
//           { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//           { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//           { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//           { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//           { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//           { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//           { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//           { "id": "country-uganda", "label": "Uganda", "type": "Country" },
//           { "id": "country-zambia", "label": "Zambia", "type": "Country" },
//           { "id": "country-zimbabwe", "label": "Zimbabwe", "type": "Country" },
//           // --- Locations ---
//           { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"country": "Algeria", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"country": "Guinea", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"country": "Republic of Congo (Congo-Brazzaville)", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"country": "DRC", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"country": "Angola", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"country": "Kenya", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"country": "Rwanda", "kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//           { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"country": "Somalia", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"country": "Somaliland", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"country": "Djibouti", "kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//           { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"country": "Tanzania", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"country": "Mozambique", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"country": "Sudan", "kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"country": "South Africa", "kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           {
//             "id": "loc-elmreisa",
//             "label": "Elmreisa Free Zone (EFZ)",
//             "type": "Location",
//             "properties": {
//               "country": "Libya",
//               "kind": "Free Zone",
//               "primaryFocus": ["Economic Development", "Trade"],
//               "status": "Under Development/Planned"
//             }
//           },
//           // --- Sectors ---
//           { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//           { "id": "sector-fisheries-blue-economy", "label": "Fisheries & Blue Economy", "type": "Sector" },
//           { "id": "sector-ports-maritime", "label": "Ports & Maritime", "type": "Sector" },
//           { "id": "sector-development-project", "label": "Development Project", "type": "Sector" },
//           { "id": "sector-free-zone", "label": "Free Zone", "type": "Sector" },
//           { "id": "sector-carbon-forestry", "label": "Carbon & Forestry", "type": "Sector" },
//           { "id": "sector-agriculture-farmland", "label": "Agriculture & Farmland", "type": "Sector" },
//           { "id": "sector-security-military", "label": "Security & Military", "type": "Sector" },
//           { "id": "sector-energy-transition", "label": "Energy Transition", "type": "Sector" },
//           { "id": "sector-trade-investment", "label": "Trade & Investment", "type": "Sector" },
//           { "id": "sector-energy", "label": "Energy", "type": "Sector" },
//           { "id": "sector-water", "label": "Water", "type": "Sector" },
//           { "id": "sector-agriculture", "label": "Agriculture", "type": "Sector" },
//           { "id": "sector-health", "label": "Health", "type": "Sector" },
//           { "id": "sector-airports", "label": "Airports", "type": "Sector" },
//           { "id": "sector-logistics", "label": "Logistics", "type": "Sector" },
//           { "id": "sector-ict", "label": "ICT", "type": "Sector" }
//   ],

//   "edges": [
//       // --- OPERATES_AT ---
//       { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//       { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//       // --- LOCATED_IN ---
//       { "source": "loc-djazair", "target": "country-algeria", "label": "LOCATED_IN" },
//       { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//       { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//       { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//       { "source": "loc-banana", "target": "country-drc", "label": "LOCATED_IN" },
//       { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//       { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//       { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//       { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//       { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//       { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//       { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//       { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//       { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//       { "source": "loc-elmreisa", "target": "country-libya", "label": "LOCATED_IN" },

//       // --- Existing Investment Links (Consider refining/replacing) ---
//       { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//       { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//       { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//       { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//       { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//       { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },

//       // --- Ownership Links ---
//       // !! These will now be drawn as arcs !!
//       { "source": "entity-ihc", "target": "entity-irh", "label": "OWNS" },
//       { "source": "entity-irh", "target": "entity-ihc", "label": "IS_OWNED_BY" },

//       // --- NEW Edges from Text Block 1 Analysis ---
//       { "source": "entity-irh", "target": "country-kenya", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-tanzania", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-burundi", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zambia", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-angola", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zimbabwe", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "sector-mining", "label": "TARGETS_INVESTMENT_IN", "properties": {"amount_USD_B": 1, "year": 2024, "funding_source": "IHC"} },

//       // --- PLACEHOLDER for future edges ---

//     ]
// };


// const InteractiveKnowledgeGraph = () => {
//   // --- State Variables ---
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] });
//   const simulationRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLegend, setShowLegend] = useState(true);
//   const [isBuildingNetwork, setIsBuildingNetwork] = useState(false);
//   const [visibleNodeIds, setVisibleNodeIds] = useState(new Set());
//   const [lastExpandedNodeId, setLastExpandedNodeId] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const [renderedNodeCount, setRenderedNodeCount] = useState(0);


//   // Refs for D3 elements / behaviors
//   const svgRef = useRef(null);
//   const gRef = useRef(null);
//   const zoomRef = useRef(null);

//   // --- Configuration ---
//   const nodeColorScale = {
//         'Organization': '#4285F4', // Blue
//         'Country': '#EA4335',      // Red
//         'Location': '#FBBC05',     // Yellow
//         'Associated Entity': '#34A853', // Green
//         'Sector': '#F4B400',       // Orange
//         'Government Body': '#800080', // Purple (Added)
//   };

//   const edgeStyles = {
//         'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' },
//         'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' },
//         'Current Investments In': { stroke: '#1A73E8', strokeWidth: 1.5, dasharray: '5,5' },
//         'OWNS': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' },
//         'IS_OWNED_BY': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' },
//         'TARGETS_INVESTMENT_IN': { stroke: '#FF69B4', strokeWidth: 1.5, dasharray: '4,4'}
//   };

//   // --- Effects ---

//   // Load initial full data only once and process it for the state
//   useEffect(() => {
//     const validNodes = fullGraphData.nodes.filter(n => n && n.id);
//     const nodeIds = new Set(validNodes.map(n => n.id));
//     const validEdges = fullGraphData.edges.filter(e => {
//         if (!e || !e.source || !e.target || !e.label) { return false; }
//         if (!nodeIds.has(e.source)) { return false; }
//         if (!nodeIds.has(e.target)) { return false; }
//         return true;
//     });
//     // Map 'label' to 'type' for consistency in link objects used by D3
//     const linksForState = validEdges.map(edge => ({ ...edge, source: edge.source, target: edge.target, type: edge.label }));
//     setGraphData({ nodes: validNodes, links: linksForState });
//     // console.log("Initial graph data loaded and processed.");
//   }, []);

//   // Initialize D3 zoom behavior once
//    useEffect(() => {
//        if (svgRef.current && !zoomRef.current) {
//            zoomRef.current = d3.zoom()
//                .scaleExtent([0.1, 8])
//                .on('zoom', (event) => { if (gRef.current) { d3.select(gRef.current).attr('transform', event.transform); } });
//            d3.select(svgRef.current).call(zoomRef.current);
//            d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//        }
//    }, []);

//     // --- Node Click Handler (Memoized) ---
//     const handleNodeClick = useCallback((event, clickedNodeData) => {
//         event.stopPropagation();
//         if (!graphData || !graphData.links) { return; }
//         const clickedId = clickedNodeData.id;
//         let nextVisibleIds;

//         if (!isBuildingNetwork) {
//             setIsBuildingNetwork(true);
//             const initialVisibleIds = new Set([clickedId]);
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId && link.target) initialVisibleIds.add(link.target);
//                 else if (link.target === clickedId && link.source) initialVisibleIds.add(link.source);
//             });
//             nextVisibleIds = new Set([...initialVisibleIds].filter(id => id != null));
//             const newHistory = [nextVisibleIds];
//             setHistory(newHistory); setHistoryIndex(0);
//             setVisibleNodeIds(nextVisibleIds); setLastExpandedNodeId(clickedId);
//         } else {
//              const currentVisibleIds = history[historyIndex];
//              if (!currentVisibleIds) { return; }
//             const neighborsToExpand = new Set();
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId && link.target && !currentVisibleIds.has(link.target)) { neighborsToExpand.add(link.target); }
//                 else if (link.target === clickedId && link.source && !currentVisibleIds.has(link.source)) { neighborsToExpand.add(link.source); }
//             });
//             const validNeighbors = new Set([...neighborsToExpand].filter(id => id != null));
//             if (validNeighbors.size > 0) {
//                 nextVisibleIds = new Set([...currentVisibleIds, ...validNeighbors]);
//                 // Ensure the clicked node itself remains visible even if expanding from it
//                 nextVisibleIds.add(clickedId);
//                 const newHistory = history.slice(0, historyIndex + 1); newHistory.push(nextVisibleIds);
//                 setHistory(newHistory); setHistoryIndex(newHistory.length - 1);
//                 setVisibleNodeIds(nextVisibleIds); setLastExpandedNodeId(clickedId);
//             } else {
//                 // Still update last expanded even if no new neighbors added
//                 setLastExpandedNodeId(clickedId);
//             }
//         }
//     }, [isBuildingNetwork, graphData, history, historyIndex]);


//    // --- D3 Rendering Function (Memoized) ---
//    // Now expects links to potentially have linkIndex and totalLinksInGroup properties
//    const renderGraph = useCallback((nodes, links) => {
//         const container = d3.select(svgRef.current)?.node()?.parentNode;
//         if (!container || !svgRef.current) { return null; }
//         const width = container.clientWidth || 1000; const height = container.clientHeight || 700;
//         const svg = d3.select(svgRef.current).attr('width', '100%').attr('height', '100%').attr('viewBox', [0, 0, width, height]).attr('preserveAspectRatio', 'xMidYMid meet');

//         if(zoomRef.current) { svg.call(zoomRef.current); } else { return null; /* Should be initialized */ }
//         let g;
//         if (gRef.current) { g = d3.select(gRef.current); g.selectAll('*').remove(); } else { g = svg.append('g'); gRef.current = g.node(); }
//         if (zoomRef.current) { const currentTransform = d3.zoomTransform(svg.node()); g.attr('transform', currentTransform); }

//         g.append('defs').append('marker').attr('id', 'arrowhead').attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#999');

//         // Link paths
//         const link = g.append('g')
//             .attr('class', 'links')
//             .selectAll('path')
//             // Key function using type should be sufficient for given data, but could add index if needed
//             .data(links, d => `${d.source.id}-${d.target.id}-${d.type}`)
//             .join('path')
//             .attr('class', 'link')
//             .attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//             .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//             .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//             .attr('fill', 'none')
//             .attr('marker-end', 'url(#arrowhead)');

//         // Node groups (circle + text + title)
//         const node = g.append('g')
//             .attr('class', 'nodes')
//             .selectAll('g')
//             .data(nodes, d => d.id)
//             .join('g')
//             .attr('class', 'node')
//             .style('cursor', 'pointer')
//             .on('click', handleNodeClick)
//             .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

//         node.append('circle')
//             .attr('r', 12)
//             .attr('fill', d => nodeColorScale[d.type] || '#ccc')
//             // Highlight last clicked/expanded node
//             .attr('stroke', d => d.id === lastExpandedNodeId ? '#f00' : '#fff')
//             .attr('stroke-width', d => d.id === lastExpandedNodeId ? 3 : 1.5);

//         node.append('text')
//             .attr('dx', 18)
//             .attr('dy', 5)
//             .text(d => d.label)
//             .style('font-size', '11px')
//             .style('font-family', 'sans-serif')
//             .style('paint-order', 'stroke')
//             .style('stroke', '#fff')
//             .style('stroke-width', '3px')
//             .style('stroke-linecap', 'butt')
//             .style('fill', '#333')
//             .attr('pointer-events', 'none'); // Prevent text from blocking node click

//         // Tooltip on hover
//         node.append('title')
//             .text(d => {
//                 let tt = `${d.label}\nType: ${d.type}`;
//                 if (d.properties) {
//                     tt += `\n--- Properties ---\n${Object.entries(d.properties)
//                         .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
//                         .join('\n')}`;
//                 }
//                 return tt;
//             });

//         // Link labels
//         const linkLabel = g.append('g')
//             .attr('class', 'link-labels')
//             .selectAll('text')
//             // Key function using type should be sufficient
//             .data(links, d => `${d.source.id}-${d.target.id}-${d.type}`)
//             .join("text")
//             .attr('class', 'link-label')
//             .attr('dy', -5) // Base vertical offset
//             .style('font-size', '9px')
//             .style('font-family', 'sans-serif')
//             .style('fill', '#555')
//             .style('text-anchor', 'middle')
//             .attr('pointer-events', 'none') // Prevent labels interfering with interaction
//             .text(d => d.type);

//         // --- Force Simulation Setup ---
//         if (simulationRef.current) { simulationRef.current.stop(); }
//         const newSimulation = d3.forceSimulation(nodes)
//             .force('link', d3.forceLink(links).id(d => d.id).distance(isBuildingNetwork ? 160 : 130).strength(0.4))
//             .force('charge', d3.forceManyBody().strength(isBuildingNetwork ? -700 : -450))
//             .force('center', d3.forceCenter(width / 2, height / 2))
//             .force('collision', d3.forceCollide().radius(isBuildingNetwork ? 45 : 35))
//             .on('tick', ticked);
//         simulationRef.current = newSimulation;

//         // --- Ticked Function (Updates Positions) ---
//         function ticked() {
//              if (!gRef.current || !nodes.length) return; // Exit if graph is cleared or not ready

//              // Update Link Paths (Handles Arcs)
//              link.attr('d', d => {
//                  // Basic validation
//                 if (!d.source || !d.target || isNaN(d.source.x) || isNaN(d.source.y) || isNaN(d.target.x) || isNaN(d.target.y)) {
//                     return "M0,0"; // Avoid errors if nodes disappear or coords invalid
//                 }

//                 const sx = d.source.x;
//                 const sy = d.source.y;
//                 const tx = d.target.x;
//                 const ty = d.target.y;
//                 const dx = tx - sx;
//                 const dy = ty - sy;
//                 const dr = Math.sqrt(dx * dx + dy * dy);
//                 const r = 12; // node radius
//                 const arrowOffset = 8; // Space for arrowhead

//                 // Prevent drawing if nodes are virtually overlapping
//                 if (dr < r * 2) return "M0,0";

//                 // Check if this link is part of a multi-link pair
//                 // The properties linkIndex and totalLinksInGroup are added during pre-processing
//                 const isMultiLink = d.totalLinksInGroup && d.totalLinksInGroup > 1;

//                 if (!isMultiLink) {
//                     // --- Draw Straight Line ---
//                     const gamma = Math.atan2(dy, dx); // Angle of the line
//                     // Adjust start/end points for node radius and arrow offset
//                     const startX = sx + Math.cos(gamma) * (r + 1.5);
//                     const startY = sy + Math.sin(gamma) * (r + 1.5);
//                     const endX = tx - Math.cos(gamma) * (r + 1.5 + arrowOffset);
//                     const endY = ty - Math.sin(gamma) * (r + 1.5 + arrowOffset);
//                     // Check adjusted distance
//                     if (Math.sqrt((endX - startX)**2 + (endY - startY)**2) < 1) return "M0,0";
//                     return `M${startX},${startY}L${endX},${endY}`;
//                 } else {
//                     // --- Draw Curved Arc ---
//                     // Determine sweep-flag (direction) based on index (alternating)
//                     // Ensure consistent direction regardless of source/target order for the pair
//                     // Use linkIndex (0, 1, 2, 3...)
//                     const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));

//                     // Arc radius - increase slightly for links further out in the bundle
//                     // Tune the multiplier (0.15) for desired curvature separation
//                     // const curvatureFactor = 0.15 * (Math.floor(d.linkIndex / 2) + 1);
//                     const curvatureFactor = 0.08 * (Math.floor(d.linkIndex / 2) + 1);




//                     const arcRadius = dr / 2 * (1 + curvatureFactor); // Base radius on half distance + curve factor

//                     // Calculate rough start/end points adjusted for the arc
//                     // This is an approximation; precise tangents are more complex
//                     const midpointX = (sx + tx) / 2;
//                     const midpointY = (sy + ty) / 2;
//                     const angle = Math.atan2(dy, dx);
//                     // Calculate the height of the arc's center from the midpoint using Pythagoras
//                     // Use || 0 to handle potential floating point issues if arcRadius ~ dr/2
//                     const curveHeight = Math.sqrt(Math.max(0, arcRadius**2 - (dr/2)**2)) || 0;
//                     const offsetSign = (sweepFlag === 1) ? 1 : -1;
//                     // Perpendicular vector component to find control point
//                     const controlX = midpointX + curveHeight * Math.sin(angle) * offsetSign;
//                     const controlY = midpointY - curveHeight * Math.cos(angle) * offsetSign;

//                     // Approximate angles from nodes to the control point to adjust start/end
//                     const startAngle = Math.atan2(controlY - sy, controlX - sx);
//                     const endAngle = Math.atan2(ty - controlY, tx - controlX); // Angle from control point to target

//                     const startX = sx + Math.cos(startAngle) * (r + 1.5);
//                     const startY = sy + Math.sin(startAngle) * (r + 1.5);
//                     const endX = tx - Math.cos(endAngle) * (r + 1.5 + arrowOffset); // Adjust target using endAngle
//                     const endY = ty - Math.sin(endAngle) * (r + 1.5 + arrowOffset);

//                     // Check validity before returning path string
//                     if(isNaN(startX+startY+endX+endY)) return "M0,0";

//                     // SVG Arc path: M startX,startY A rx,ry x-axis-rotation large-arc-flag,sweep-flag endX,endY
//                     // large-arc-flag is 0 because we want the shorter arc path
//                     return `M${startX},${startY} A${arcRadius},${arcRadius} 0 0,${sweepFlag} ${endX},${endY}`;
//                 }
//              });

//              // Update Node Positions
//              node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);

//              // Update Link Label Positions (Handles Arcs)
//              linkLabel
//                  .attr('x', d => {
//                      if (!d.source || !d.target || isNaN(d.source.x) || isNaN(d.target.x)) return 0;
//                      const sx = d.source.x, tx = d.target.x;
//                      const midpointX = (sx + tx) / 2;

//                      // If it's part of a multi-link, offset perpendicularly
//                      if (d.totalLinksInGroup && d.totalLinksInGroup > 1) {
//                          const sy = d.source.y, ty = d.target.y;
//                          const dx = tx - sx, dy = ty - sy;
//                          const dr = Math.sqrt(dx*dx + dy*dy);
//                          if (dr < 1) return midpointX; // Avoid division by zero

//                          const nx = -dy / dr; // Normalized perpendicular vector x
//                          // Tune base offset (5) and incremental offset (8)
//                          // const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 8;
//                          const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 4;
//                          const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));
//                          const sign = (sweepFlag === 1) ? 1 : -1; // Match arc direction
//                          return midpointX + nx * offsetMagnitude * sign;
//                      }
//                      return midpointX; // Default to straight line midpoint
//                  })
//                  .attr('y', d => {
//                      if (!d.source || !d.target || isNaN(d.source.y) || isNaN(d.target.y)) return 0;
//                      const sy = d.source.y, ty = d.target.y;
//                      const midpointY = (sy + ty) / 2;

//                      // If it's part of a multi-link, offset perpendicularly
//                      if (d.totalLinksInGroup && d.totalLinksInGroup > 1) {
//                          const sx = d.source.x, tx = d.target.x;
//                          const dx = tx - sx, dy = ty - sy;
//                          const dr = Math.sqrt(dx*dx + dy*dy);
//                          if (dr < 1) return midpointY; // Avoid division by zero

//                          const ny = dx / dr; // Normalized perpendicular vector y
//                          // Tune base offset (5) and incremental offset (8)
//                          // const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 8;
//                          const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 4;
//                          const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));
//                          const sign = (sweepFlag === 1) ? 1 : -1; // Match arc direction
//                          return midpointY + ny * offsetMagnitude * sign;
//                      }
//                      return midpointY; // Default to straight line midpoint
//                  });
//         } // End ticked()

//         // --- Drag Handlers ---
//         function dragstarted(event, d) {
//             if (!event.active) newSimulation.alphaTarget(0.3).restart();
//             d.fx = d.x; // Fix node position horizontally
//             d.fy = d.y; // Fix node position vertically
//         }
//         function dragged(event, d) {
//             d.fx = event.x;
//             d.fy = event.y;
//         }
//         function dragended(event, d) {
//             if (!event.active) newSimulation.alphaTarget(0); // Release alpha target
//              // Optionally unfix position after drag:
//              // d.fx = null;
//              // d.fy = null;
//         }

//     }, [isBuildingNetwork, nodeColorScale, edgeStyles, handleNodeClick, lastExpandedNodeId, historyIndex]); // Dependencies for useCallback


//   // Main effect for determining data and calling renderGraph
//   useEffect(() => {
//     if (!graphData || !graphData.nodes || !graphData.links) { return; }
//     if (simulationRef.current) { simulationRef.current.stop(); }

//     let nodesToRender = [];
//     let linksFromState = []; // Links with string IDs from graphData state

//     // --- Determine Nodes and Links based on Mode/Filters ---
//     if (isBuildingNetwork) {
//         if (visibleNodeIds.size > 0) {
//             nodesToRender = graphData.nodes.filter(n => visibleNodeIds.has(n.id));
//             const currentVisibleSet = new Set(nodesToRender.map(n => n.id));
//             // Ensure links only connect currently visible nodes
//             linksFromState = graphData.links.filter(link =>
//                 link.source && link.target &&
//                 currentVisibleSet.has(link.source) &&
//                 currentVisibleSet.has(link.target)
//             );
//         } else {
//             nodesToRender = [];
//             linksFromState = [];
//         }
//     } else {
//         // --- Overview Mode: Apply filters ---
//         let potentialNodes = [...graphData.nodes];
//         let potentialLinks = [...graphData.links];
//         let nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));

//         // Filter by Node Type
//         if (selectedNodeType !== 'all') {
//             potentialNodes = potentialNodes.filter(node => node.type === selectedNodeType);
//             nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));
//             // Filter links to only include those connecting the remaining nodes
//             potentialLinks = potentialLinks.filter(link =>
//                 link.source && link.target &&
//                 nodeIdsToKeep.has(link.source) &&
//                 nodeIdsToKeep.has(link.target)
//             );
//         }

//         // Filter by Edge Type
//         if (selectedEdgeType !== 'all') {
//             potentialLinks = potentialLinks.filter(link => link.type === selectedEdgeType);
//             // After filtering links, ensure only nodes involved in these links remain
//             const nodeIdsInFilteredLinks = new Set();
//             potentialLinks.forEach(link => {
//                 if(link.source) nodeIdsInFilteredLinks.add(link.source);
//                 if(link.target) nodeIdsInFilteredLinks.add(link.target);
//             });
//             potentialNodes = potentialNodes.filter(node => nodeIdsInFilteredLinks.has(node.id));
//         }

//         // Filter by Search Term
//         if (searchTerm) {
//             const lowerSearchTerm = searchTerm.toLowerCase();
//             potentialNodes = potentialNodes.filter(node =>
//                 node.label.toLowerCase().includes(lowerSearchTerm) ||
//                 node.type.toLowerCase().includes(lowerSearchTerm) ||
//                 (node.properties && Object.values(node.properties).some(val =>
//                     String(val).toLowerCase().includes(lowerSearchTerm)
//                 ))
//             );
//             nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));
//             // Filter links again based on remaining nodes after search
//             potentialLinks = potentialLinks.filter(link =>
//                  link.source && link.target &&
//                  nodeIdsToKeep.has(link.source) &&
//                  nodeIdsToKeep.has(link.target)
//             );
//         }

//         nodesToRender = potentialNodes;
//         linksFromState = potentialLinks;
//     }

//     // Update rendered node count state
//     setRenderedNodeCount(nodesToRender.length);

//     // --- **NEW**: Pre-process links to identify parallel edges & assign indices ---
//     const linkPairCounts = {}; // Key: sorted 'node1Id-node2Id', Value: { count: N, current: 0 }

//     // First pass: Count links between each pair of nodes
//     linksFromState.forEach(link => {
//         if (!link.source || !link.target) return; // Safety check
//         const ids = [link.source, link.target].sort(); // Sort IDs for a consistent key
//         const pairKey = `${ids[0]}-${ids[1]}`;
//         if (!linkPairCounts[pairKey]) {
//             linkPairCounts[pairKey] = { count: 0, current: 0 }; // Initialize if first time seeing pair
//         }
//         linkPairCounts[pairKey].count++;
//     });

//     // Second pass: Assign index and total count to each link object
//     const processedLinksFromState = linksFromState.map(link => {
//         if (!link.source || !link.target) return link; // Safety check
//         const ids = [link.source, link.target].sort();
//         const pairKey = `${ids[0]}-${ids[1]}`;
//         const groupInfo = linkPairCounts[pairKey];

//         if (!groupInfo) return link; // Should not happen if first pass worked

//         // Assign index within the group (0, 1, 2...) and total count for this pair
//         const linkIndex = groupInfo.current++; // Assign current index, then increment for the next link in this group
//         const totalLinksInGroup = groupInfo.count;

//         // Return a new link object with the added properties
//         return { ...link, linkIndex, totalLinksInGroup };
//     });
//     // --- **END** Link Pre-processing ---

//     // --- Prepare final data for D3's forceSimulation ---
//     // Create a map for quick node object lookup
//     const nodeMap = new Map(nodesToRender.map(node => [node.id, node]));

//     // Map string IDs in links to actual node objects using the nodeMap
//     // Use the processed links which now include arc information
//     const finalLinksForD3 = processedLinksFromState // <-- Use processed links
//         .map(link => ({
//             ...link,
//             source: nodeMap.get(link.source), // Replace source ID with source node object
//             target: nodeMap.get(link.target)  // Replace target ID with target node object
//         }))
//         .filter(link => link.source && link.target); // Ensure both source and target nodes exist in the current view

//     // --- Call Rendering ---
//     if (nodesToRender.length > 0 || isBuildingNetwork) { // Render even if building network has 0 nodes initially
//         renderGraph(nodesToRender, finalLinksForD3);
//     } else {
//         // Clear the graph if no nodes match filters and not in build mode
//         if (svgRef.current) {
//             d3.select(svgRef.current).select('g').remove(); // Remove the main drawing group
//             gRef.current = null; // Clear the ref
//         }
//         if (simulationRef.current) {
//             simulationRef.current.stop(); // Stop any lingering simulation
//             simulationRef.current = null;
//         }
//     }

//     // Cleanup function for when the component unmounts or dependencies change
//     return () => {
//         if (simulationRef.current) {
//             simulationRef.current.stop();
//         }
//     };
//     // Ensure all relevant state variables and the stable renderGraph function are included
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, isBuildingNetwork, visibleNodeIds, renderGraph, lastExpandedNodeId, history, historyIndex]);

//   // --- UI Options ---
//   const nodeTypeOptions = [ { value: 'all', label: 'All Node Types' }, { value: 'Organization', label: 'Organization' }, { value: 'Country', label: 'Country' }, { value: 'Location', label: 'Location' }, { value: 'Associated Entity', label: 'Associated Entity' }, { value: 'Sector', label: 'Sector' }, { value: 'Government Body', label: 'Government Body' }, ];
//   const edgeTypeOptions = [ { value: 'all', label: 'All Relationship Types' }, { value: 'OPERATES_AT', label: 'OPERATES_AT' }, { value: 'LOCATED_IN', label: 'LOCATED_IN' }, { value: 'Current Investments In', label: 'Current Investments In' }, { value: 'OWNS', label: 'OWNS' }, { value: 'IS_OWNED_BY', label: 'IS_OWNED_BY' }, { value: 'TARGETS_INVESTMENT_IN', label: 'Targets Investment In' }, ];

//   // --- UI Event Handlers ---
//   const handleReset = () => {
//       setIsBuildingNetwork(false);
//       setVisibleNodeIds(new Set());
//       setHistory([]);
//       setHistoryIndex(-1);
//       setSelectedNodeType('all');
//       setSelectedEdgeType('all');
//       setSearchTerm('');
//       setLastExpandedNodeId(null);
//       // Reset zoom/pan
//       if (svgRef.current && zoomRef.current) {
//           d3.select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity);
//       }
//   };
//   const handleExitBuildMode = () => {
//       setIsBuildingNetwork(false);
//       setVisibleNodeIds(new Set());
//       setHistory([]);
//       setHistoryIndex(-1);
//       setLastExpandedNodeId(null);
//       // Optionally reset zoom, or keep current view
//       // if (svgRef.current && zoomRef.current) {
//       //     d3.select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity);
//       // }
//   };
//   const handleUndo = () => {
//       if (!isBuildingNetwork || historyIndex <= 0) return;
//       const newIndex = historyIndex - 1;
//       setHistoryIndex(newIndex);
//       setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null); // Clear highlight on undo/redo
//   };
//   const handleRedo = () => {
//       if (!isBuildingNetwork || historyIndex >= history.length - 1) return;
//       const newIndex = historyIndex + 1;
//       setHistoryIndex(newIndex);
//       setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null); // Clear highlight on undo/redo
//   };

//   // --- JSX ---
//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10 print:hidden">
//         <h1 className="text-xl font-semibold mb-3 text-gray-800">Interactive Knowledge Graph: UAE Investments/Operations</h1>

//         {/* Mode Indicator & History Controls */}
//          {isBuildingNetwork && (
//              <div className="mb-2 p-2 bg-blue-100 border border-blue-300 rounded text-sm flex flex-wrap justify-between items-center gap-2">
//                  <span className="font-medium text-blue-800">Build Mode ({visibleNodeIds.size} nodes visible). Click nodes to expand network.</span>
//                  <div className="flex items-center gap-2">
//                      <button
//                          className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                          onClick={handleUndo}
//                          disabled={historyIndex <= 0}
//                          title="Undo last expansion (Ctrl+Z)">
//                          Undo
//                     </button>
//                      <button
//                          className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                          onClick={handleRedo}
//                          disabled={historyIndex >= history.length - 1}
//                          title="Redo expansion (Ctrl+Y)">
//                          Redo
//                      </button>
//                      <button
//                          className="text-blue-700 hover:text-blue-900 text-xs font-medium"
//                          onClick={handleExitBuildMode}
//                          title="Return to filtered/overview mode">
//                          (Exit Build Mode)
//                      </button>
//                  </div>
//              </div>
//          )}

//         {/* Filters & Search Area - Disabled when in Build Mode */}
//         <div className={`flex flex-wrap items-end gap-x-4 gap-y-2 ${isBuildingNetwork ? 'opacity-50 pointer-events-none' : ''}`}>
//             <div>
//                 <label htmlFor="ntf" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label>
//                 <select
//                     id="ntf"
//                     className="w-48 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
//                     value={selectedNodeType}
//                     onChange={e=>setSelectedNodeType(e.target.value)}
//                     disabled={isBuildingNetwork}>
//                         {nodeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="etf" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label>
//                 <select
//                     id="etf"
//                     className="w-52 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
//                     value={selectedEdgeType}
//                     onChange={e=>setSelectedEdgeType(e.target.value)}
//                     disabled={isBuildingNetwork}>
//                         {edgeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="si" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes/Properties</label>
//                 <input
//                     id="si"
//                     type="text"
//                     className="w-48 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
//                     value={searchTerm}
//                     onChange={e=>setSearchTerm(e.target.value)}
//                     placeholder="Name, type, property..."
//                     disabled={isBuildingNetwork}/>
//             </div>
//         </div>

//          {/* Action Buttons Area */}
//          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
//              <button
//                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm font-medium shadow-sm"
//                  onClick={handleReset}
//                  title="Reset filters, search, zoom, and exit build mode">
//                  Reset All
//              </button>
//              <button
//                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm"
//                  onClick={() => setShowLegend(!showLegend)}>
//                  {showLegend ? 'Hide Legend' : 'Show Legend'}
//              </button>
//          </div>

//         {/* Legend */}
//         {showLegend && (
//              <div className="bg-white p-3 rounded border border-gray-200 mt-3 text-xs shadow-sm max-w-4xl">
//                  <h3 className="font-semibold mb-2 text-sm text-gray-700">Legend</h3>
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
//                      <div>
//                          <h4 className="font-medium mb-1 text-gray-600">Node Types</h4>
//                          <div className="flex flex-wrap gap-x-4 gap-y-1">
//                              {nodeTypeOptions.filter(o => o.value !== 'all').map(o => (
//                                  <div key={o.value} className="flex items-center">
//                                      <div className="w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: nodeColorScale[o.value] || '#ccc' }}></div>
//                                      <span>{o.label}</span>
//                                  </div>
//                              ))}
//                          </div>
//                      </div>
//                      <div>
//                          <h4 className="font-medium mb-1 text-gray-600">Relationship Types</h4>
//                          <div className="flex flex-wrap gap-x-4 gap-y-2">
//                              {edgeTypeOptions.filter(o => o.value !== 'all').map(o => {
//                                  const s = edgeStyles[o.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' };
//                                  // Simulate line and arrowhead
//                                  return (
//                                      <div key={o.value} className="flex items-center">
//                                          <svg width="30" height="8" className="mr-1.5 flex-shrink-0">
//                                              {/* Simple line representation */}
//                                              <line x1="0" y1="4" x2="25" y2="4" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeDasharray={s.dasharray}/>
//                                              {/* Simple triangle arrowhead */}
//                                              <polygon points="25,0 30,4 25,8" fill={s.stroke} />
//                                          </svg>
//                                          <span>{o.label}</span>
//                                      </div>
//                                  );
//                              })}
//                          </div>
//                      </div>
//                  </div>
//                  <div className="mt-3 pt-2 border-t border-gray-200 text-gray-500">
//                      <p>
//                          {isBuildingNetwork ? "Build Mode: Click nodes to expand network. Use Undo/Redo. " : "Overview Mode: Use filters/search or click a node to start Build Mode. "}
//                          Drag nodes to reposition. Scroll/pinch to zoom. Hover over nodes for details. Multiple links between two nodes are shown as arcs.
//                      </p>
//                  </div>
//              </div>
//          )}
//       </div>

//       {/* Graph Container */}
//       <div className="flex-grow border-t border-gray-200 overflow-hidden relative">
//         <svg ref={svgRef} id="graph-container" className="w-full h-full">
//            {/* g element will be appended here by D3 */}
//         </svg>

//          {/* Loading / Empty State Messages */}
//          {/* Message when filters result in no nodes (Overview Mode) */}
//          {!isBuildingNetwork && graphData.nodes.length > 0 && renderedNodeCount === 0 && (
//              <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                 No nodes match the current filters or search term.
//              </div>
//          )}
//          {/* Message when Build Mode is active but no nodes are visible yet (shouldn't happen often with current logic) */}
//          {isBuildingNetwork && visibleNodeIds.size === 0 && historyIndex < 0 && (
//               <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                  Click a node in Overview Mode to start building the network.
//               </div>
//           )}
//           {/* Message while initial data is loading */}
//           {graphData.nodes.length === 0 && graphData.links.length === 0 && !isBuildingNetwork && (
//                <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                    Loading graph data...
//                </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;




























// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as d3 from 'd3';



// // --- Define the Combined Graph Data ---
// const fullGraphData = {
//   "nodes": [
//           // --- Entities ---
//           {
//             "id": "org-adports",
//             "label": "AD Ports Group",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Maritime Services", "Industrial Zones"],
//               "subType": "Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "gov-uae",
//             "label": "UAE Government",
//             "type": "Government Body",
//             "properties": {
//               "country": "UAE",
//               "entityNature": "National Government",
//               "primaryFocus": ["Governance", "National Development", "International Relations"],
//               "subType": "Federal Government"
//             }
//           },
//           {
//             "id": "org-dpworld",
//             "label": "DP World",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Terminals", "Supply Chain Management"],
//               "subType": "Global Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "entity-ihc",
//             "label": "IHC (International Holding Company)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed Conglomerate)",
//               "primaryFocus": ["Investment Holding", "Diversified Conglomerate"],
//               "subType": "Holding Company"
//             }
//           },
//           {
//             "id": "entity-irh",
//             "label": "IRH (International Resources Holding)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial",
//               "primaryFocus": ["Resources", "Mining Investment"],
//               "subType": "Investment Arm / Subsidiary",
//               "parentCompany": "IHC"
//             }
//           },
//           {
//             "id": "org-pic",
//             "label": "Public Investment Corporation SOC Ltd (PIC)",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "South Africa",
//               "entityNature": "State-Owned Corporation (SOC)",
//               "primaryFocus": ["Investment Management", "Public Funds"],
//               "subType": "State-Owned Investment Corporation"
//             }
//           },
//           {
//             "id": "gov-som-fisheries",
//             "label": "Somali Ministry of Fisheries & Blue Economy",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Somalia",
//               "entityNature": "Government Ministry",
//               "primaryFocus": ["Fisheries", "Maritime Economy", "Regulation"],
//               "subType": "National Ministry"
//             }
//           },
//           {
//             "id": "org-beng-commerce",
//             "label": "Benghazi Chamber of Commerce",
//             "type": "Organization",
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Business Association",
//               "primaryFocus": ["Commerce", "Business Development"],
//               "subType": "Chamber of Commerce"
//             }
//           },
//           {
//             "id": "org-emaar",
//             "label": "Emaar",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed)",
//               "primaryFocus": ["Real Estate Development", "Property Management"],
//               "subType": "Development Company"
//             }
//           },
//           {
//             "id": "gov-lib-devagency",
//             "label": "National Development Agency (Libya)",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Government Agency",
//               "primaryFocus": ["National Development", "Project Management"],
//               "subType": "Development Agency",
//               "notes": "Reported as 'Hafter managed' in source"
//             }
//           },
//           {
//             "id": "org-gci",
//             "label": "GCI",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Investment Entity (Inferred)",
//               "primaryFocus": ["Carbon Credits", "Environmental Projects", "Forestry"],
//               "notes": "Associated with UAE takeover of African forests for Blue Carbon deal"
//             }
//           },
//           {
//             "id": "org-eap",
//             "label": "EAP",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Agricultural Program/Entity (Inferred, Public-Private)",
//               "primaryFocus": ["Agriculture", "Farmland", "Bilateral Agreements"],
//               "notes": "Associated with UAE farmlands across Africa"
//             }
//           },
//           {
//             "id": "org-tayan",
//             "label": "TAYAN",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Security/Military Entity (Inferred)",
//               "primaryFocus": ["Security Agreements", "Military Training"],
//               "notes": "Associated with UAE MoUs focused on anti-terrorism & military training"
//             }
//           },
//           {
//             "id": "org-masdar",
//             "label": "Masdar",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Owned)",
//               "primaryFocus": ["Renewable Energy", "Sustainable Development", "Energy Transition"],
//               "subType": "Renewable Energy Company",
//               "ownership": "Abu Dhabi Government (via Mubadala, ADNOC, TAQA)"
//             }
//           },
//           {
//             "id": "org-primeragold",
//             "label": "Primera Gold",
//             "type": "Organization",
//             "properties": {
//               "entityNature": "Commercial",
//               "primaryFocus": ["Mining", "Gold Trading"],
//               "subType": "Mining Company / Trading Firm",
//               "ownership": "IHC",
//               "operationalRegion": ["DRC"]
//             }
//           },
//           // --- Countries ---
//           { "id": "country-algeria", "label": "Algeria", "type": "Country" },
//           { "id": "country-angola", "label": "Angola", "type": "Country" },
//           { "id": "country-botswana", "label": "Botswana", "type": "Country" },
//           { "id": "country-burundi", "label": "Burundi", "type": "Country" },
//           { "id": "country-chad", "label": "Chad", "type": "Country" },
//           { "id": "country-drc", "label": "Democratic Republic of the Congo (DRC)", "type": "Country" },
//           { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//           { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//           { "id": "country-eritrea", "label": "Eritrea", "type": "Country" },
//           { "id": "country-ethiopia", "label": "Ethiopia", "type": "Country" },
//           { "id": "country-ghana", "label": "Ghana", "type": "Country" },
//           { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//           { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//           { "id": "country-liberia", "label": "Liberia", "type": "Country" },
//           { "id": "country-libya", "label": "Libya", "type": "Country" },
//           { "id": "country-mali", "label": "Mali", "type": "Country" },
//           { "id": "country-mauritania", "label": "Mauritania", "type": "Country" },
//           { "id": "country-mauritius", "label": "Mauritius", "type": "Country" },
//           { "id": "country-morocco", "label": "Morocco", "type": "Country" },
//           { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//           { "id": "country-namibia", "label": "Namibia", "type": "Country" },
//           { "id": "country-nigeria", "label": "Nigeria", "type": "Country" },
//           { "id": "country-congo", "label": "Republic of Congo (Congo-Brazzaville)", "type": "Country" },
//           { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//           { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//           { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//           { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//           { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//           { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//           { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//           { "id": "country-uganda", "label": "Uganda", "type": "Country" },
//           { "id": "country-zambia", "label": "Zambia", "type": "Country" },
//           { "id": "country-zimbabwe", "label": "Zimbabwe", "type": "Country" },
//           // --- Locations ---
//           { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"country": "Algeria", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"country": "Guinea", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"country": "Republic of Congo (Congo-Brazzaville)", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"country": "DRC", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"country": "Angola", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"country": "Kenya", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"country": "Rwanda", "kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//           { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"country": "Somalia", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"country": "Somaliland", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"country": "Djibouti", "kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//           { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"country": "Tanzania", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"country": "Mozambique", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"country": "Sudan", "kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"country": "South Africa", "kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           {
//             "id": "loc-elmreisa",
//             "label": "Elmreisa Free Zone (EFZ)",
//             "type": "Location",
//             "properties": {
//               "country": "Libya",
//               "kind": "Free Zone",
//               "primaryFocus": ["Economic Development", "Trade"],
//               "status": "Under Development/Planned"
//             }
//           },
//           // --- Sectors ---
//           { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//           { "id": "sector-fisheries-blue-economy", "label": "Fisheries & Blue Economy", "type": "Sector" },
//           { "id": "sector-ports-maritime", "label": "Ports & Maritime", "type": "Sector" },
//           { "id": "sector-development-project", "label": "Development Project", "type": "Sector" },
//           { "id": "sector-free-zone", "label": "Free Zone", "type": "Sector" },
//           { "id": "sector-carbon-forestry", "label": "Carbon & Forestry", "type": "Sector" },
//           { "id": "sector-agriculture-farmland", "label": "Agriculture & Farmland", "type": "Sector" },
//           { "id": "sector-security-military", "label": "Security & Military", "type": "Sector" },
//           { "id": "sector-energy-transition", "label": "Energy Transition", "type": "Sector" },
//           { "id": "sector-trade-investment", "label": "Trade & Investment", "type": "Sector" },
//           { "id": "sector-energy", "label": "Energy", "type": "Sector" },
//           { "id": "sector-water", "label": "Water", "type": "Sector" },
//           { "id": "sector-agriculture", "label": "Agriculture", "type": "Sector" },
//           { "id": "sector-health", "label": "Health", "type": "Sector" },
//           { "id": "sector-airports", "label": "Airports", "type": "Sector" },
//           { "id": "sector-logistics", "label": "Logistics", "type": "Sector" },
//           { "id": "sector-ict", "label": "ICT", "type": "Sector" }
//   ],

//   "edges": [
//       // --- OPERATES_AT ---
//       { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//       { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//       // --- LOCATED_IN ---
//       { "source": "loc-djazair", "target": "country-algeria", "label": "LOCATED_IN" },
//       { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//       { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//       { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//       { "source": "loc-banana", "target": "country-drc", "label": "LOCATED_IN" },
//       { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//       { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//       { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//       { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//       { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//       { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//       { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//       { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//       { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//       { "source": "loc-elmreisa", "target": "country-libya", "label": "LOCATED_IN" },

//       // --- Existing Investment Links (Consider refining/replacing) ---
//       { "source": "entity-ihc", "target": "country-kenya", "label": "Current Investments In" },
//       // { "source": "entity-irh", "target": "country-kenya", "label": "Current Investments In" },
//       { "source": "entity-ihc", "target": "country-tanzania", "label": "Current Investments In" },
//       // { "source": "entity-irh", "target": "country-tanzania", "label": "Current Investments In" },
//       { "source": "entity-ihc", "target": "country-angola", "label": "Current Investments In" },
//       // { "source": "entity-irh", "target": "country-angola", "label": "Current Investments In" },

//       // --- Ownership Links ---
//       // !! These will now be drawn as arcs !!
//       { "source": "entity-ihc", "target": "entity-irh", "label": "OWNS" },
//       { "source": "entity-irh", "target": "entity-ihc", "label": "IS_OWNED_BY" },

//       // --- NEW Edges from Text Block 1 Analysis ---
//       { "source": "entity-irh", "target": "country-kenya", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-tanzania", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-burundi", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zambia", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-angola", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zimbabwe", "label": "TARGETS_INVESTMENT_IN", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "sector-mining", "label": "TARGETS_INVESTMENT_IN", "properties": {"amount_USD_B": 1, "year": 2024, "funding_source": "IHC"} },


//     ]
// };




// const fullGraphData = {
//   "nodes": [
//           // --- Entities ---
//           {
//             "id": "org-adports",
//             "label": "AD Ports Group",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Maritime Services", "Industrial Zones"],
//               "subType": "Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "gov-uae",
//             "label": "UAE Government",
//             "type": "Government Body",
//             "properties": {
//               "country": "UAE",
//               "entityNature": "National Government",
//               "primaryFocus": ["Governance", "National Development", "International Relations"],
//               "subType": "Federal Government"
//             }
//           },
//           {
//             "id": "org-dpworld",
//             "label": "DP World",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Terminals", "Supply Chain Management"],
//               "subType": "Global Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "entity-ihc",
//             "label": "IHC (International Holding Company)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed Conglomerate)",
//               "primaryFocus": ["Investment Holding", "Diversified Conglomerate"],
//               "subType": "Holding Company"
//             }
//           },
//           {
//             "id": "entity-irh",
//             "label": "IRH (International Resources Holding)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial",
//               "primaryFocus": ["Resources", "Mining Investment"],
//               "subType": "Investment Arm / Subsidiary",
//               "parentCompany": "IHC"
//             }
//           },
//           {
//             "id": "org-pic",
//             "label": "Public Investment Corporation SOC Ltd (PIC)",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "South Africa",
//               "entityNature": "State-Owned Corporation (SOC)",
//               "primaryFocus": ["Investment Management", "Public Funds"],
//               "subType": "State-Owned Investment Corporation"
//             }
//           },
//           {
//             "id": "gov-som-fisheries",
//             "label": "Somali Ministry of Fisheries & Blue Economy",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Somalia",
//               "entityNature": "Government Ministry",
//               "primaryFocus": ["Fisheries", "Maritime Economy", "Regulation"],
//               "subType": "National Ministry"
//             }
//           },
//           {
//             "id": "org-beng-commerce",
//             "label": "Benghazi Chamber of Commerce",
//             "type": "Organization",
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Business Association",
//               "primaryFocus": ["Commerce", "Business Development"],
//               "subType": "Chamber of Commerce"
//             }
//           },
//           {
//             "id": "org-emaar",
//             "label": "Emaar",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed)",
//               "primaryFocus": ["Real Estate Development", "Property Management"],
//               "subType": "Development Company"
//             }
//           },
//           {
//             "id": "gov-lib-devagency",
//             "label": "National Development Agency (Libya)",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Government Agency",
//               "primaryFocus": ["National Development", "Project Management"],
//               "subType": "Development Agency",
//               "notes": "Reported as 'Hafter managed' in source"
//             }
//           },
//           {
//             "id": "org-gci",
//             "label": "GCI",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Investment Entity (Inferred)",
//               "primaryFocus": ["Carbon Credits", "Environmental Projects", "Forestry"],
//               "notes": "Associated with UAE takeover of African forests for Blue Carbon deal"
//             }
//           },
//           {
//             "id": "org-eap",
//             "label": "EAP",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Agricultural Program/Entity (Inferred, Public-Private)",
//               "primaryFocus": ["Agriculture", "Farmland", "Bilateral Agreements"],
//               "notes": "Associated with UAE farmlands across Africa"
//             }
//           },
//           {
//             "id": "org-tayan",
//             "label": "TAYAN",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Security/Military Entity (Inferred)",
//               "primaryFocus": ["Security Agreements", "Military Training"],
//               "notes": "Associated with UAE MoUs focused on anti-terrorism & military training"
//             }
//           },
//           {
//             "id": "org-masdar",
//             "label": "Masdar",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Owned)",
//               "primaryFocus": ["Renewable Energy", "Sustainable Development", "Energy Transition"],
//               "subType": "Renewable Energy Company",
//               "ownership": "Abu Dhabi Government (via Mubadala, ADNOC, TAQA)"
//             }
//           },
//           {
//             "id": "org-primeragold",
//             "label": "Primera Gold",
//             "type": "Organization",
//             "properties": {
//               "entityNature": "Commercial",
//               "primaryFocus": ["Mining", "Gold Trading"],
//               "subType": "Mining Company / Trading Firm",
//               "ownership": "IHC",
//               "operationalRegion": ["DRC"]
//             }
//           },




//           // --- Countries ---
//           { "id": "country-algeria", "label": "Algeria", "type": "Country" },
//           { "id": "country-angola", "label": "Angola", "type": "Country" },
//           { "id": "country-botswana", "label": "Botswana", "type": "Country" },
//           { "id": "country-burundi", "label": "Burundi", "type": "Country" },
//           { "id": "country-chad", "label": "Chad", "type": "Country" },
//           { "id": "country-drc", "label": "Democratic Republic of the Congo (DRC)", "type": "Country" },
//           { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//           { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//           { "id": "country-eritrea", "label": "Eritrea", "type": "Country" },
//           { "id": "country-ethiopia", "label": "Ethiopia", "type": "Country" },
//           { "id": "country-ghana", "label": "Ghana", "type": "Country" },
//           { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//           { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//           { "id": "country-liberia", "label": "Liberia", "type": "Country" },
//           { "id": "country-libya", "label": "Libya", "type": "Country" },
//           { "id": "country-mali", "label": "Mali", "type": "Country" },
//           { "id": "country-mauritania", "label": "Mauritania", "type": "Country" },
//           { "id": "country-mauritius", "label": "Mauritius", "type": "Country" },
//           { "id": "country-morocco", "label": "Morocco", "type": "Country" },
//           { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//           { "id": "country-namibia", "label": "Namibia", "type": "Country" },
//           { "id": "country-nigeria", "label": "Nigeria", "type": "Country" },
//           { "id": "country-congo", "label": "Republic of Congo (Congo-Brazzaville)", "type": "Country" },
//           { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//           { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//           { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//           { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//           { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//           { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//           { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//           { "id": "country-uganda", "label": "Uganda", "type": "Country" },
//           { "id": "country-zambia", "label": "Zambia", "type": "Country" },
//           { "id": "country-zimbabwe", "label": "Zimbabwe", "type": "Country" },




//           // --- Locations ---
//           { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"country": "Algeria", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"country": "Guinea", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"country": "Republic of Congo (Congo-Brazzaville)", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"country": "DRC", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"country": "Angola", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"country": "Kenya", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"country": "Rwanda", "kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//           { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"country": "Somalia", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"country": "Somaliland", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"country": "Djibouti", "kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//           { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"country": "Tanzania", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"country": "Mozambique", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"country": "Sudan", "kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"country": "South Africa", "kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           {
//             "id": "loc-elmreisa",
//             "label": "Elmreisa Free Zone (EFZ)",
//             "type": "Location",
//             "properties": {
//               "country": "Libya",
//               "kind": "Free Zone",
//               "primaryFocus": ["Economic Development", "Trade"],
//               "status": "Under Development/Planned"
//             }
//           },



//           // --- Sectors ---
//           { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//           { "id": "sector-fisheries-blue-economy", "label": "Fisheries & Blue Economy", "type": "Sector" },
//           { "id": "sector-ports-maritime", "label": "Ports & Maritime", "type": "Sector" },
//           { "id": "sector-development-project", "label": "Development Project", "type": "Sector" },
//           { "id": "sector-free-zone", "label": "Free Zone", "type": "Sector" },
//           { "id": "sector-carbon-forestry", "label": "Carbon & Forestry", "type": "Sector" },
//           { "id": "sector-agriculture-farmland", "label": "Agriculture & Farmland", "type": "Sector" },
//           { "id": "sector-security-military", "label": "Security & Military", "type": "Sector" },
//           { "id": "sector-energy-transition", "label": "Energy Transition", "type": "Sector" },
//           { "id": "sector-trade-investment", "label": "Trade & Investment", "type": "Sector" },
//           { "id": "sector-energy", "label": "Energy", "type": "Sector" },
//           { "id": "sector-water", "label": "Water", "type": "Sector" },
//           { "id": "sector-agriculture", "label": "Agriculture", "type": "Sector" },
//           { "id": "sector-health", "label": "Health", "type": "Sector" },
//           { "id": "sector-airports", "label": "Airports", "type": "Sector" },
//           { "id": "sector-logistics", "label": "Logistics", "type": "Sector" },
//           { "id": "sector-ict", "label": "ICT", "type": "Sector" }
//   ],

//   "edges": [
//       // --- OPERATES_AT ---
//       { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//       { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//       // --- LOCATED_IN ---
//       { "source": "loc-djazair", "target": "country-algeria", "label": "LOCATED_IN" },
//       { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//       { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//       { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//       { "source": "loc-banana", "target": "country-drc", "label": "LOCATED_IN" },
//       { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//       { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//       { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//       { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//       { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//       { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//       { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//       { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//       { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//       { "source": "loc-elmreisa", "target": "country-libya", "label": "LOCATED_IN" },

//       { "source": "entity-ihc", "target": "entity-irh", "label": "OWNS" },
//       { "source": "entity-irh", "target": "entity-ihc", "label": "IS_OWNED_BY" },

//       { "source": "entity-irh", "target": "country-kenya", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-tanzania", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-burundi", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zambia", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-angola", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zimbabwe", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "sector-mining", "label": "Planned Investment / Strategic Intent", "properties": {"amount_USD_B": 1, "year": 2024, "funding_source": "IHC"} },


//     ]
// };










// const fullGraphData = {
//   "nodes": [
//           // --- Entities ---
//           {
//             "id": "org-adports",
//             "label": "AD Ports Group",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Maritime Services", "Industrial Zones"],
//               "subType": "Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "gov-uae",
//             "label": "UAE Government",
//             "type": "Government Body",
//             "properties": {
//               "country": "UAE",
//               "entityNature": "National Government",
//               "primaryFocus": ["Governance", "National Development", "International Relations"],
//               "subType": "Federal Government"
//             }
//           },
//           {
//             "id": "org-dpworld",
//             "label": "DP World",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Terminals", "Supply Chain Management"],
//               "subType": "Global Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "entity-ihc",
//             "label": "IHC (International Holding Company)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed Conglomerate)",
//               "primaryFocus": ["Investment Holding", "Diversified Conglomerate"],
//               "subType": "Holding Company"
//             }
//           },
//           {
//             "id": "entity-irh",
//             "label": "IRH (International Resources Holding)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial",
//               "primaryFocus": ["Resources", "Mining Investment"],
//               "subType": "Investment Arm / Subsidiary",
//               "parentCompany": "IHC"
//             }
//           },
//           {
//             "id": "org-pic",
//             "label": "Public Investment Corporation SOC Ltd (PIC)",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "South Africa",
//               "entityNature": "State-Owned Corporation (SOC)",
//               "primaryFocus": ["Investment Management", "Public Funds"],
//               "subType": "State-Owned Investment Corporation"
//             }
//           },
//           {
//             "id": "gov-som-fisheries",
//             "label": "Somali Ministry of Fisheries & Blue Economy",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Somalia",
//               "entityNature": "Government Ministry",
//               "primaryFocus": ["Fisheries", "Maritime Economy", "Regulation"],
//               "subType": "National Ministry"
//             }
//           },
//           {
//             "id": "org-beng-commerce",
//             "label": "Benghazi Chamber of Commerce",
//             "type": "Organization",
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Business Association",
//               "primaryFocus": ["Commerce", "Business Development"],
//               "subType": "Chamber of Commerce"
//             }
//           },
//           {
//             "id": "org-emaar",
//             "label": "Emaar",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed)",
//               "primaryFocus": ["Real Estate Development", "Property Management"],
//               "subType": "Development Company"
//             }
//           },
//           {
//             "id": "gov-lib-devagency",
//             "label": "National Development Agency (Libya)",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Government Agency",
//               "primaryFocus": ["National Development", "Project Management"],
//               "subType": "Development Agency",
//               "notes": "Reported as 'Hafter managed' in source"
//             }
//           },
//           {
//             "id": "org-gci",
//             "label": "GCI",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Investment Entity (Inferred)",
//               "primaryFocus": ["Carbon Credits", "Environmental Projects", "Forestry"],
//               "notes": "Associated with UAE takeover of African forests for Blue Carbon deal"
//             }
//           },
//           {
//             "id": "org-eap",
//             "label": "EAP",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Agricultural Program/Entity (Inferred, Public-Private)",
//               "primaryFocus": ["Agriculture", "Farmland", "Bilateral Agreements"],
//               "notes": "Associated with UAE farmlands across Africa"
//             }
//           },
//           {
//             "id": "org-tayan",
//             "label": "TAYAN",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Security/Military Entity (Inferred)",
//               "primaryFocus": ["Security Agreements", "Military Training"],
//               "notes": "Associated with UAE MoUs focused on anti-terrorism & military training"
//             }
//           },
//           {
//             "id": "org-masdar",
//             "label": "Masdar",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Owned)",
//               "primaryFocus": ["Renewable Energy", "Sustainable Development", "Energy Transition"],
//               "subType": "Renewable Energy Company",
//               "ownership": "Abu Dhabi Government (via Mubadala, ADNOC, TAQA)"
//             }
//           },
//           {
//             "id": "org-primeragold",
//             "label": "Primera Gold",
//             "type": "Organization",
//             "properties": {
//               "entityNature": "Commercial",
//               "primaryFocus": ["Mining", "Gold Trading"],
//               "subType": "Mining Company / Trading Firm",
//               "ownership": "IHC",
//               "operationalRegion": ["DRC"]
//             }
//           },




//           // --- Countries ---
//           { "id": "country-algeria", "label": "Algeria", "type": "Country" },
//           { "id": "country-angola", "label": "Angola", "type": "Country" },
//           { "id": "country-botswana", "label": "Botswana", "type": "Country" },
//           { "id": "country-burundi", "label": "Burundi", "type": "Country" },
//           { "id": "country-chad", "label": "Chad", "type": "Country" },
//           { "id": "country-drc", "label": "Democratic Republic of the Congo (DRC)", "type": "Country" },
//           { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//           { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//           { "id": "country-eritrea", "label": "Eritrea", "type": "Country" },
//           { "id": "country-ethiopia", "label": "Ethiopia", "type": "Country" },
//           { "id": "country-ghana", "label": "Ghana", "type": "Country" },
//           { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//           { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//           { "id": "country-liberia", "label": "Liberia", "type": "Country" },
//           { "id": "country-libya", "label": "Libya", "type": "Country" },
//           { "id": "country-mali", "label": "Mali", "type": "Country" },
//           { "id": "country-mauritania", "label": "Mauritania", "type": "Country" },
//           { "id": "country-mauritius", "label": "Mauritius", "type": "Country" },
//           { "id": "country-morocco", "label": "Morocco", "type": "Country" },
//           { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//           { "id": "country-namibia", "label": "Namibia", "type": "Country" },
//           { "id": "country-nigeria", "label": "Nigeria", "type": "Country" },
//           { "id": "country-congo", "label": "Republic of Congo (Congo-Brazzaville)", "type": "Country" },
//           { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//           { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//           { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//           { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//           { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//           { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//           { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//           { "id": "country-uganda", "label": "Uganda", "type": "Country" },
//           { "id": "country-zambia", "label": "Zambia", "type": "Country" },
//           { "id": "country-zimbabwe", "label": "Zimbabwe", "type": "Country" },




//           // --- Locations ---
//           { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"country": "Algeria", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"country": "Guinea", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"country": "Republic of Congo (Congo-Brazzaville)", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"country": "DRC", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"country": "Angola", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"country": "Kenya", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"country": "Rwanda", "kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//           { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"country": "Somalia", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"country": "Somaliland", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"country": "Djibouti", "kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//           { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"country": "Tanzania", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"country": "Mozambique", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"country": "Sudan", "kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"country": "South Africa", "kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           {
//             "id": "loc-elmreisa",
//             "label": "Elmreisa Free Zone (EFZ)",
//             "type": "Location",
//             "properties": {
//               "country": "Libya",
//               "kind": "Free Zone",
//               "primaryFocus": ["Economic Development", "Trade"],
//               "status": "Under Development/Planned"
//             }
//           },



//           // --- Sectors ---
//           { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//           { "id": "sector-fisheries-blue-economy", "label": "Fisheries & Blue Economy", "type": "Sector" },
//           { "id": "sector-ports-maritime", "label": "Ports & Maritime", "type": "Sector" },
//           { "id": "sector-development-project", "label": "Development Project", "type": "Sector" },
//           { "id": "sector-free-zone", "label": "Free Zone", "type": "Sector" },
//           { "id": "sector-carbon-forestry", "label": "Carbon & Forestry", "type": "Sector" },
//           { "id": "sector-agriculture-farmland", "label": "Agriculture & Farmland", "type": "Sector" },
//           { "id": "sector-security-military", "label": "Security & Military", "type": "Sector" },
//           { "id": "sector-energy-transition", "label": "Energy Transition", "type": "Sector" },
//           { "id": "sector-trade-investment", "label": "Trade & Investment", "type": "Sector" },
//           { "id": "sector-energy", "label": "Energy", "type": "Sector" },
//           { "id": "sector-water", "label": "Water", "type": "Sector" },
//           { "id": "sector-agriculture", "label": "Agriculture", "type": "Sector" },
//           { "id": "sector-health", "label": "Health", "type": "Sector" },
//           { "id": "sector-airports", "label": "Airports", "type": "Sector" },
//           { "id": "sector-logistics", "label": "Logistics", "type": "Sector" },
//           { "id": "sector-ict", "label": "ICT", "type": "Sector" }
//   ],

//   "edges": [
//       // --- OPERATES_AT ---
//       { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//       { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//       // --- LOCATED_IN ---
//       { "source": "loc-djazair", "target": "country-algeria", "label": "LOCATED_IN" },
//       { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//       { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//       { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//       { "source": "loc-banana", "target": "country-drc", "label": "LOCATED_IN" },
//       { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//       { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//       { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//       { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//       { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//       { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//       { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//       { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//       { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//       { "source": "loc-elmreisa", "target": "country-libya", "label": "LOCATED_IN" },

//       { "source": "entity-ihc", "target": "entity-irh", "label": "OWNS" },
//       { "source": "entity-irh", "target": "entity-ihc", "label": "IS_OWNED_BY" },

//       { "source": "org-pic", "target": "country-somalia", "label": "BELONGS_TO" },


//       { "source": "entity-irh", "target": "country-kenya", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-tanzania", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-burundi", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zambia", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-angola", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zimbabwe", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "sector-mining", "label": "Planned Investment / Strategic Intent", "properties": {"amount_USD_B": 1, "year": 2024, "funding_source": "IHC"} },

//       { "source": "entity-irh", "target": "org-pic", "label": "Memorandum of Understanding (MoU)", "properties": {} },

//     ]
// };



















































// import React, { useState, useEffect, useCallback, useRef } from 'react';
// import * as d3 from 'd3';

// const fullGraphData = {
//   "nodes": [
//           // --- Entities ---
//           {
//             "id": "org-adports",
//             "label": "AD Ports Group",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Maritime Services", "Industrial Zones"],
//               "subType": "Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "gov-uae",
//             "label": "UAE Government",
//             "type": "Government Body",
//             "properties": {
//               "country": "UAE",
//               "entityNature": "National Government",
//               "primaryFocus": ["Governance", "National Development", "International Relations"],
//               "subType": "Federal Government"
//             }
//           },
//           {
//             "id": "org-dpworld",
//             "label": "DP World",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Linked)",
//               "primaryFocus": ["Ports", "Logistics", "Terminals", "Supply Chain Management"],
//               "subType": "Global Port Operator & Logistics Provider"
//             }
//           },
//           {
//             "id": "entity-ihc",
//             "label": "IHC (International Holding Company)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed Conglomerate)",
//               "primaryFocus": ["Investment Holding", "Diversified Conglomerate"],
//               "subType": "Holding Company"
//             }
//           },
//           {
//             "id": "entity-irh",
//             "label": "IRH (International Resources Holding)",
//             "type": "Associated Entity",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial",
//               "primaryFocus": ["Resources", "Mining Investment"],
//               "subType": "Investment Arm / Subsidiary",
//               "parentCompany": "IHC"
//             }
//           },
//           {
//             "id": "org-pic",
//             "label": "Public Investment Corporation SOC Ltd (PIC)",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "South Africa",
//               "entityNature": "State-Owned Corporation (SOC)",
//               "primaryFocus": ["Investment Management", "Public Funds"],
//               "subType": "State-Owned Investment Corporation"
//             }
//           },
//           {
//             "id": "gov-som-fisheries",
//             "label": "Somali Ministry of Fisheries & Blue Economy",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Somalia",
//               "entityNature": "Government Ministry",
//               "primaryFocus": ["Fisheries", "Maritime Economy", "Regulation"],
//               "subType": "National Ministry"
//             }
//           },
//           {
//             "id": "org-beng-commerce",
//             "label": "Benghazi Chamber of Commerce",
//             "type": "Organization",
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Business Association",
//               "primaryFocus": ["Commerce", "Business Development"],
//               "subType": "Chamber of Commerce"
//             }
//           },
//           {
//             "id": "org-emaar",
//             "label": "Emaar",
//             "type": "Organization",
//             "properties": {
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (Publicly Listed)",
//               "primaryFocus": ["Real Estate Development", "Property Management"],
//               "subType": "Development Company"
//             }
//           },
//           {
//             "id": "gov-lib-devagency",
//             "label": "National Development Agency (Libya)",
//             "type": "Government Body", // <-- New Type
//             "properties": {
//               "country": "Libya",
//               "entityNature": "Government Agency",
//               "primaryFocus": ["National Development", "Project Management"],
//               "subType": "Development Agency",
//               "notes": "Reported as 'Hafter managed' in source"
//             }
//           },
//           {
//             "id": "org-gci",
//             "label": "GCI",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Investment Entity (Inferred)",
//               "primaryFocus": ["Carbon Credits", "Environmental Projects", "Forestry"],
//               "notes": "Associated with UAE takeover of African forests for Blue Carbon deal"
//             }
//           },
//           {
//             "id": "org-eap",
//             "label": "EAP",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Agricultural Program/Entity (Inferred, Public-Private)",
//               "primaryFocus": ["Agriculture", "Farmland", "Bilateral Agreements"],
//               "notes": "Associated with UAE farmlands across Africa"
//             }
//           },
//           {
//             "id": "org-tayan",
//             "label": "TAYAN",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Linked",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Security/Military Entity (Inferred)",
//               "primaryFocus": ["Security Agreements", "Military Training"],
//               "notes": "Associated with UAE MoUs focused on anti-terrorism & military training"
//             }
//           },
//           {
//             "id": "org-masdar",
//             "label": "Masdar",
//             "type": "Organization",
//             "properties": {
//               "group": "UAE Investor",
//               "countryOfOrigin": "UAE",
//               "entityNature": "Commercial (State-Owned)",
//               "primaryFocus": ["Renewable Energy", "Sustainable Development", "Energy Transition"],
//               "subType": "Renewable Energy Company",
//               "ownership": "Abu Dhabi Government (via Mubadala, ADNOC, TAQA)"
//             }
//           },
//           {
//             "id": "org-primeragold",
//             "label": "Primera Gold",
//             "type": "Organization",
//             "properties": {
//               "entityNature": "Commercial",
//               "primaryFocus": ["Mining", "Gold Trading"],
//               "subType": "Mining Company / Trading Firm",
//               "ownership": "IHC",
//               "operationalRegion": ["DRC"]
//             }
//           },

//           // --- Countries ---
//           { "id": "country-algeria", "label": "Algeria", "type": "Country" },
//           { "id": "country-angola", "label": "Angola", "type": "Country" },
//           { "id": "country-botswana", "label": "Botswana", "type": "Country" },
//           { "id": "country-burundi", "label": "Burundi", "type": "Country" },
//           { "id": "country-chad", "label": "Chad", "type": "Country" },
//           { "id": "country-drc", "label": "Democratic Republic of the Congo (DRC)", "type": "Country" },
//           { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
//           { "id": "country-egypt", "label": "Egypt", "type": "Country" },
//           { "id": "country-eritrea", "label": "Eritrea", "type": "Country" },
//           { "id": "country-ethiopia", "label": "Ethiopia", "type": "Country" },
//           { "id": "country-ghana", "label": "Ghana", "type": "Country" },
//           { "id": "country-guinea", "label": "Guinea", "type": "Country" },
//           { "id": "country-kenya", "label": "Kenya", "type": "Country" },
//           { "id": "country-liberia", "label": "Liberia", "type": "Country" },
//           { "id": "country-libya", "label": "Libya", "type": "Country" },
//           { "id": "country-mali", "label": "Mali", "type": "Country" },
//           { "id": "country-mauritania", "label": "Mauritania", "type": "Country" },
//           { "id": "country-mauritius", "label": "Mauritius", "type": "Country" },
//           { "id": "country-morocco", "label": "Morocco", "type": "Country" },
//           { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
//           { "id": "country-namibia", "label": "Namibia", "type": "Country" },
//           { "id": "country-nigeria", "label": "Nigeria", "type": "Country" },
//           { "id": "country-congo", "label": "Republic of Congo (Congo-Brazzaville)", "type": "Country" },
//           { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
//           { "id": "country-senegal", "label": "Senegal", "type": "Country" },
//           { "id": "country-somalia", "label": "Somalia", "type": "Country" },
//           { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
//           { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
//           { "id": "country-sudan", "label": "Sudan", "type": "Country" },
//           { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
//           { "id": "country-uganda", "label": "Uganda", "type": "Country" },
//           { "id": "country-zambia", "label": "Zambia", "type": "Country" },
//           { "id": "country-zimbabwe", "label": "Zimbabwe", "type": "Country" },

//           // --- Locations ---
//           { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"country": "Algeria", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"country": "Guinea", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"country": "Republic of Congo (Congo-Brazzaville)", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"country": "DRC", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"country": "Angola", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"country": "Kenya", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
//           { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"country": "Rwanda", "kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
//           { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"country": "Somalia", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"country": "Somaliland", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"country": "Djibouti", "kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
//           { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"country": "Tanzania", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"country": "Mozambique", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
//           { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"country": "Sudan", "kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"country": "South Africa", "kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
//           {
//             "id": "loc-elmreisa",
//             "label": "Elmreisa Free Zone (EFZ)",
//             "type": "Location",
//             "properties": {
//               "country": "Libya",
//               "kind": "Free Zone",
//               "primaryFocus": ["Economic Development", "Trade"],
//               "status": "Under Development/Planned"
//             }
//           },

//           // --- Sectors ---
//           { "id": "sector-mining", "label": "Mining", "type": "Sector" },
//           { "id": "sector-fisheries-blue-economy", "label": "Fisheries & Blue Economy", "type": "Sector" },
//           { "id": "sector-ports-maritime", "label": "Ports & Maritime", "type": "Sector" },
//           { "id": "sector-development-project", "label": "Development Project", "type": "Sector" },
//           { "id": "sector-free-zone", "label": "Free Zone", "type": "Sector" },
//           { "id": "sector-carbon-forestry", "label": "Carbon & Forestry", "type": "Sector" },
//           { "id": "sector-agriculture-farmland", "label": "Agriculture & Farmland", "type": "Sector" },
//           { "id": "sector-security-military", "label": "Security & Military", "type": "Sector" },
//           { "id": "sector-energy-transition", "label": "Energy Transition", "type": "Sector" },
//           { "id": "sector-trade-investment", "label": "Trade & Investment", "type": "Sector" },
//           { "id": "sector-energy", "label": "Energy", "type": "Sector" },
//           { "id": "sector-water", "label": "Water", "type": "Sector" },
//           { "id": "sector-agriculture", "label": "Agriculture", "type": "Sector" },
//           { "id": "sector-health", "label": "Health", "type": "Sector" },
//           { "id": "sector-airports", "label": "Airports", "type": "Sector" },
//           { "id": "sector-logistics", "label": "Logistics", "type": "Sector" },
//           { "id": "sector-ict", "label": "ICT", "type": "Sector" }
//   ],

//   "edges": [
//       // --- OPERATES_AT ---
//       { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
//       { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
//       { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

//       // --- LOCATED_IN ---
//       { "source": "loc-djazair", "target": "country-algeria", "label": "LOCATED_IN" },
//       { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
//       { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
//       { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
//       { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
//       { "source": "loc-banana", "target": "country-drc", "label": "LOCATED_IN" },
//       { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
//       { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
//       { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
//       { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
//       { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
//       { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
//       { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
//       { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
//       { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
//       { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
//       { "source": "loc-elmreisa", "target": "country-libya", "label": "LOCATED_IN" },

//       { "source": "entity-ihc", "target": "entity-irh", "label": "OWNS" },
//       { "source": "entity-ihc", "target": "org-primeragold", "label": "OWNS" },

//       { "source": "org-pic", "target": "country-southafrica", "label": "BELONGS_TO" },
//       { "source": "entity-ihc", "target": "gov-uae", "label": "BELONGS_TO" },
//       { "source": "gov-som-fisheries", "target": "country-somalia", "label": "BELONGS_TO" },
//       { "source": "gov-lib-devagency", "target": "country-libya", "label": "BELONGS_TO" },
//       { "source": "org-masdar", "target": "gov-uae", "label": "BELONGS_TO" },

//       { "source": "org-primeragold", "target": "country-drc", "label": "Signed Bilateral Agreement", "properties": {} },
//       { "source": "gov-som-fisheries", "target": "org-adports", "label": "Signed MoU with Future Collaboration Intent", "properties": {} },
//       { "source": "entity-irh", "target": "org-pic", "label": "Memorandum of Understanding (MoU)", "properties": {} },
//       { "source": "org-emaar", "target": "gov-lib-devagency", "label": "Commercial Contract", "properties": {} },
//       { "source": "org-dpworld", "target": "country-ghana", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
//       { "source": "org-dpworld", "target": "country-botswana", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
//       { "source": "org-dpworld", "target": "country-senegal", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
//       { "source": "org-dpworld", "target": "country-algeria", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
//       { "source": "org-dpworld", "target": "country-mozambique", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
//       { "source": "org-dpworld", "target": "country-rwanda", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
//       { "source": "org-dpworld", "target": "country-djibouti", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
//       { "source": "org-dpworld", "target": "country-egypt", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },

//       { "source": "gov-uae", "target": "country-liberia", "label": "Established Environmental / Carbon Credit Deal", "properties": {} },

//       { "source": "gov-uae", "target": "country-nigeria", "label": "Established Agricultural Land Use", "properties": {} },
//       { "source": "gov-uae", "target": "country-namibia", "label": "Established Agricultural Land Use", "properties": {} },
//       { "source": "gov-uae", "target": "country-ethiopia", "label": "Established Agricultural Land Use", "properties": {} },

//       { "source": "gov-uae", "target": "country-morocco", "label": "Signed Defence and Security MoUs", "properties": {} },
//       { "source": "gov-uae", "target": "country-mauritania", "label": "Signed Defence and Security MoUs", "properties": {} },
//       { "source": "gov-uae", "target": "country-chad", "label": "Signed Defence and Security MoUs", "properties": {} },
//       { "source": "gov-uae", "target": "country-eritrea", "label": "Signed Defence and Security MoUs", "properties": {} },
//       { "source": "gov-uae", "target": "country-mali", "label": "Signed Defence and Security MoUs", "properties": {} },
//       { "source": "gov-uae", "target": "country-guinea", "label": "Signed Defence and Security MoUs", "properties": {} },

//       { "source": "org-masdar", "target": "country-congo", "label": "Ongoing Strategic Energy Investment Programme", "properties": {} },
//       { "source": "gov-uae", "target": "country-mauritius", "label": "Exploratory Trade and Investment Intent", "properties": {} },
//       { "source": "gov-uae", "target": "country-uganda", "label": "Established Foreign Direct Investment", "properties": {} },

//       { "source": "entity-irh", "target": "country-kenya", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-tanzania", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-burundi", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zambia", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-angola", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "country-zimbabwe", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
//       { "source": "entity-irh", "target": "sector-mining", "label": "Planned Investment / Strategic Intent", "properties": {"amount_USD_B": 1, "year": 2024, "funding_source": "IHC"} },

//     ]
// };

// const InteractiveKnowledgeGraph = () => {
//   // --- State Variables ---
//   const [selectedNodeType, setSelectedNodeType] = useState('all');
//   const [selectedEdgeType, setSelectedEdgeType] = useState('all');
//   const [graphData, setGraphData] = useState({ nodes: [], links: [] });
//   const simulationRef = useRef(null);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [showLegend, setShowLegend] = useState(true);
//   const [isBuildingNetwork, setIsBuildingNetwork] = useState(false);
//   const [visibleNodeIds, setVisibleNodeIds] = useState(new Set());
//   const [lastExpandedNodeId, setLastExpandedNodeId] = useState(null);
//   const [history, setHistory] = useState([]);
//   const [historyIndex, setHistoryIndex] = useState(-1);
//   const [renderedNodeCount, setRenderedNodeCount] = useState(0);

//   // Refs for D3 elements / behaviors
//   const svgRef = useRef(null);
//   const gRef = useRef(null);
//   const zoomRef = useRef(null);

//   // --- Configuration ---
//   const nodeColorScale = {
//       'Organization': '#4285F4', // Blue
//       'Country': '#EA4335',      // Red
//       'Location': '#FBBC05',     // Yellow
//       'Associated Entity': '#34A853', // Green
//       'Sector': '#F4B400',       // Orange
//       'Government Body': '#800080', // Purple
//   };

//   const edgeStyles = {
//       // Core Operations & Location
//       'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' }, // Dark grey, solid, thicker
//       'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' }, // Red, solid, thinner

//       // Ownership & Structure
//       'OWNS': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' }, // Green, solid
//       'BELONGS_TO': { stroke: '#20B2AA', strokeWidth: 1.5, dasharray: '0' }, // LightSeaGreen, solid (Distinguish from OWNS slightly)

//       // Planned / Intent / Future Programmes
//       'Planned Investment / Strategic Intent': { stroke: '#FF69B4', strokeWidth: 1.5, dasharray: '4,4'}, // HotPink, dashed
//       'Planned Strategic Investment Programme': { stroke: '#8A2BE2', strokeWidth: 1.5, dasharray: '5,5'}, // BlueViolet, dashed
//       'Exploratory Trade and Investment Intent': { stroke: '#FFC0CB', strokeWidth: 1.5, dasharray: '2,4'}, // Pink (lighter), dashed

//       // Agreements / MoUs / Contracts
//       'Signed Bilateral Agreement': { stroke: '#1E90FF', strokeWidth: 1.2, dasharray: '4,2' }, // DodgerBlue, dashed
//       'Signed MoU with Future Collaboration Intent': { stroke: '#1E90FF', strokeWidth: 1.2, dasharray: '4,2' }, // DodgerBlue, dashed
//       'Memorandum of Understanding (MoU)': { stroke: '#1E90FF', strokeWidth: 1.2, dasharray: '4,2' }, // DodgerBlue, dashed
//       'Commercial Contract': { stroke: '#1E90FF', strokeWidth: 1.2, dasharray: '4,2' }, // DodgerBlue, dashed
//       'Signed Defence and Security MoUs': { stroke: '#4682B4', strokeWidth: 1.2, dasharray: '6,2' }, // SteelBlue, dashed (Slightly different for Defence)

//       // Established Deals / Status / Ongoing
//       'Established Environmental / Carbon Credit Deal': { stroke: '#008080', strokeWidth: 1.2, dasharray: '0' }, // Teal, solid
//       'Established Agricultural Land Use': { stroke: '#008080', strokeWidth: 1.2, dasharray: '0' }, // Teal, solid
//       'Established Foreign Direct Investment': { stroke: '#008080', strokeWidth: 1.2, dasharray: '0' }, // Teal, solid
//       'Ongoing Strategic Energy Investment Programme': { stroke: '#FFA500', strokeWidth: 1.5, dasharray: '6,3' }, // Orange, dashed
// };

//   // --- Effects ---

//   // Load initial full data only once and process it for the state
//   useEffect(() => {
//     const validNodes = fullGraphData.nodes.filter(n => n && n.id);
//     const nodeIds = new Set(validNodes.map(n => n.id));
//     const validEdges = fullGraphData.edges.filter(e => {
//         if (!e || !e.source || !e.target || !e.label) { return false; }
//         if (!nodeIds.has(e.source)) { return false; }
//         if (!nodeIds.has(e.target)) { return false; }
//         return true;
//     });
//     // Map 'label' to 'type' for consistency in link objects used by D3
//     const linksForState = validEdges.map(edge => ({ ...edge, source: edge.source, target: edge.target, type: edge.label }));
//     setGraphData({ nodes: validNodes, links: linksForState });
//     // console.log("Initial graph data loaded and processed.");
//   }, []);

//   // Initialize D3 zoom behavior once
//    useEffect(() => {
//        if (svgRef.current && !zoomRef.current) {
//            zoomRef.current = d3.zoom()
//                .scaleExtent([0.1, 8])
//                .on('zoom', (event) => { if (gRef.current) { d3.select(gRef.current).attr('transform', event.transform); } });
//            d3.select(svgRef.current).call(zoomRef.current);
//            d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
//        }
//    }, []);

//     // --- Node Click Handler (Memoized) ---
//     const handleNodeClick = useCallback((event, clickedNodeData) => {
//         event.stopPropagation();
//         if (!graphData || !graphData.links) { return; }
//         const clickedId = clickedNodeData.id;
//         let nextVisibleIds;

//         if (!isBuildingNetwork) {
//             setIsBuildingNetwork(true);
//             const initialVisibleIds = new Set([clickedId]);
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId && link.target) initialVisibleIds.add(link.target);
//                 else if (link.target === clickedId && link.source) initialVisibleIds.add(link.source);
//             });
//             nextVisibleIds = new Set([...initialVisibleIds].filter(id => id != null));
//             const newHistory = [nextVisibleIds];
//             setHistory(newHistory); setHistoryIndex(0);
//             setVisibleNodeIds(nextVisibleIds); setLastExpandedNodeId(clickedId);
//         } else {
//              const currentVisibleIds = history[historyIndex];
//              if (!currentVisibleIds) { return; }
//             const neighborsToExpand = new Set();
//             graphData.links.forEach(link => {
//                 if (link.source === clickedId && link.target && !currentVisibleIds.has(link.target)) { neighborsToExpand.add(link.target); }
//                 else if (link.target === clickedId && link.source && !currentVisibleIds.has(link.source)) { neighborsToExpand.add(link.source); }
//             });
//             const validNeighbors = new Set([...neighborsToExpand].filter(id => id != null));
//             if (validNeighbors.size > 0) {
//                 nextVisibleIds = new Set([...currentVisibleIds, ...validNeighbors]);
//                 // Ensure the clicked node itself remains visible even if expanding from it
//                 nextVisibleIds.add(clickedId);
//                 const newHistory = history.slice(0, historyIndex + 1); newHistory.push(nextVisibleIds);
//                 setHistory(newHistory); setHistoryIndex(newHistory.length - 1);
//                 setVisibleNodeIds(nextVisibleIds); setLastExpandedNodeId(clickedId);
//             } else {
//                 // Still update last expanded even if no new neighbors added
//                 setLastExpandedNodeId(clickedId);
//             }
//         }
//     }, [isBuildingNetwork, graphData, history, historyIndex]);


//    // --- D3 Rendering Function (Memoized) ---
//    // Now expects links to potentially have linkIndex and totalLinksInGroup properties
//    const renderGraph = useCallback((nodes, links) => {
//         const container = d3.select(svgRef.current)?.node()?.parentNode;
//         if (!container || !svgRef.current) { return null; }
//         const width = container.clientWidth || 1000; const height = container.clientHeight || 700;
//         const svg = d3.select(svgRef.current).attr('width', '100%').attr('height', '100%').attr('viewBox', [0, 0, width, height]).attr('preserveAspectRatio', 'xMidYMid meet');

//         if(zoomRef.current) { svg.call(zoomRef.current); } else { return null; /* Should be initialized */ }
//         let g;
//         if (gRef.current) { g = d3.select(gRef.current); g.selectAll('*').remove(); } else { g = svg.append('g'); gRef.current = g.node(); }
//         if (zoomRef.current) { const currentTransform = d3.zoomTransform(svg.node()); g.attr('transform', currentTransform); }

//         g.append('defs').append('marker').attr('id', 'arrowhead').attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#999');

//         // Link paths
//         const link = g.append('g')
//             .attr('class', 'links')
//             .selectAll('path')
//             // Key function using type should be sufficient for given data, but could add index if needed
//             .data(links, d => `${d.source.id}-${d.target.id}-${d.type}`)
//             .join('path')
//             .attr('class', 'link')
//             .attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
//             .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
//             .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
//             .attr('fill', 'none')
//             .attr('marker-end', 'url(#arrowhead)');

//         // Node groups (circle + text + title)
//         const node = g.append('g')
//             .attr('class', 'nodes')
//             .selectAll('g')
//             .data(nodes, d => d.id)
//             .join('g')
//             .attr('class', 'node')
//             .style('cursor', 'pointer')
//             .on('click', handleNodeClick)
//             .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

//         node.append('circle')
//             .attr('r', 12)
//             .attr('fill', d => nodeColorScale[d.type] || '#ccc')
//             // Highlight last clicked/expanded node
//             .attr('stroke', d => d.id === lastExpandedNodeId ? '#f00' : '#fff')
//             .attr('stroke-width', d => d.id === lastExpandedNodeId ? 3 : 1.5);

//         node.append('text')
//             .attr('dx', 18)
//             .attr('dy', 5)
//             .text(d => d.label)
//             .style('font-size', '11px')
//             .style('font-family', 'sans-serif')
//             .style('paint-order', 'stroke')
//             .style('stroke', '#fff')
//             .style('stroke-width', '3px')
//             .style('stroke-linecap', 'butt')
//             .style('fill', '#333')
//             .attr('pointer-events', 'none'); // Prevent text from blocking node click

//         // Tooltip on hover
//         node.append('title')
//             .text(d => {
//                 let tt = `${d.label}\nType: ${d.type}`;
//                 if (d.properties) {
//                     tt += `\n--- Properties ---\n${Object.entries(d.properties)
//                         .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
//                         .join('\n')}`;
//                 }
//                 return tt;
//             });

//         // Link labels
//         const linkLabel = g.append('g')
//             .attr('class', 'link-labels')
//             .selectAll('text')
//             // Key function using type should be sufficient
//             .data(links, d => `${d.source.id}-${d.target.id}-${d.type}`)
//             .join("text")
//             .attr('class', 'link-label')
//             .attr('dy', -5) // Base vertical offset
//             .style('font-size', '9px')
//             .style('font-family', 'sans-serif')
//             .style('fill', '#555')
//             .style('text-anchor', 'middle')
//             .attr('pointer-events', 'none') // Prevent labels interfering with interaction
//             .text(d => d.type);

//         // --- Force Simulation Setup ---
//         if (simulationRef.current) { simulationRef.current.stop(); }
//         const newSimulation = d3.forceSimulation(nodes)
//             .force('link', d3.forceLink(links).id(d => d.id).distance(isBuildingNetwork ? 160 : 130).strength(0.4))
//             .force('charge', d3.forceManyBody().strength(isBuildingNetwork ? -700 : -450))
//             .force('center', d3.forceCenter(width / 2, height / 2))
//             .force('collision', d3.forceCollide().radius(isBuildingNetwork ? 45 : 35))
//             .on('tick', ticked);
//         simulationRef.current = newSimulation;

//         // --- Ticked Function (Updates Positions) ---
//         function ticked() {
//              if (!gRef.current || !nodes.length) return; // Exit if graph is cleared or not ready

//              // Update Link Paths (Handles Arcs)
//              link.attr('d', d => {
//                  // Basic validation
//                 if (!d.source || !d.target || isNaN(d.source.x) || isNaN(d.source.y) || isNaN(d.target.x) || isNaN(d.target.y)) {
//                     return "M0,0"; // Avoid errors if nodes disappear or coords invalid
//                 }

//                 const sx = d.source.x;
//                 const sy = d.source.y;
//                 const tx = d.target.x;
//                 const ty = d.target.y;
//                 const dx = tx - sx;
//                 const dy = ty - sy;
//                 const dr = Math.sqrt(dx * dx + dy * dy);
//                 const r = 12; // node radius
//                 const arrowOffset = 8; // Space for arrowhead

//                 // Prevent drawing if nodes are virtually overlapping
//                 if (dr < r * 2) return "M0,0";

//                 // Check if this link is part of a multi-link pair
//                 // The properties linkIndex and totalLinksInGroup are added during pre-processing
//                 const isMultiLink = d.totalLinksInGroup && d.totalLinksInGroup > 1;

//                 if (!isMultiLink) {
//                     // --- Draw Straight Line ---
//                     const gamma = Math.atan2(dy, dx); // Angle of the line
//                     // Adjust start/end points for node radius and arrow offset
//                     const startX = sx + Math.cos(gamma) * (r + 1.5);
//                     const startY = sy + Math.sin(gamma) * (r + 1.5);
//                     const endX = tx - Math.cos(gamma) * (r + 1.5 + arrowOffset);
//                     const endY = ty - Math.sin(gamma) * (r + 1.5 + arrowOffset);
//                     // Check adjusted distance
//                     if (Math.sqrt((endX - startX)**2 + (endY - startY)**2) < 1) return "M0,0";
//                     return `M${startX},${startY}L${endX},${endY}`;
//                 } else {
//                     // --- Draw Curved Arc ---
//                     // Determine sweep-flag (direction) based on index (alternating)
//                     // Ensure consistent direction regardless of source/target order for the pair
//                     // Use linkIndex (0, 1, 2, 3...)
//                     const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));

//                     // Arc radius - increase slightly for links further out in the bundle
//                     // Tune the multiplier (0.15) for desired curvature separation
//                     // const curvatureFactor = 0.15 * (Math.floor(d.linkIndex / 2) + 1);
//                     const curvatureFactor = 0.08 * (Math.floor(d.linkIndex / 2) + 1);

//                     const arcRadius = dr / 2 * (1 + curvatureFactor); // Base radius on half distance + curve factor

//                     // Calculate rough start/end points adjusted for the arc
//                     // This is an approximation; precise tangents are more complex
//                     const midpointX = (sx + tx) / 2;
//                     const midpointY = (sy + ty) / 2;
//                     const angle = Math.atan2(dy, dx);
//                     // Calculate the height of the arc's center from the midpoint using Pythagoras
//                     // Use || 0 to handle potential floating point issues if arcRadius ~ dr/2
//                     const curveHeight = Math.sqrt(Math.max(0, arcRadius**2 - (dr/2)**2)) || 0;
//                     const offsetSign = (sweepFlag === 1) ? 1 : -1;
//                     // Perpendicular vector component to find control point
//                     const controlX = midpointX + curveHeight * Math.sin(angle) * offsetSign;
//                     const controlY = midpointY - curveHeight * Math.cos(angle) * offsetSign;

//                     // Approximate angles from nodes to the control point to adjust start/end
//                     const startAngle = Math.atan2(controlY - sy, controlX - sx);
//                     const endAngle = Math.atan2(ty - controlY, tx - controlX); // Angle from control point to target

//                     const startX = sx + Math.cos(startAngle) * (r + 1.5);
//                     const startY = sy + Math.sin(startAngle) * (r + 1.5);
//                     const endX = tx - Math.cos(endAngle) * (r + 1.5 + arrowOffset); // Adjust target using endAngle
//                     const endY = ty - Math.sin(endAngle) * (r + 1.5 + arrowOffset);

//                     // Check validity before returning path string
//                     if(isNaN(startX+startY+endX+endY)) return "M0,0";

//                     // SVG Arc path: M startX,startY A rx,ry x-axis-rotation large-arc-flag,sweep-flag endX,endY
//                     // large-arc-flag is 0 because we want the shorter arc path
//                     return `M${startX},${startY} A${arcRadius},${arcRadius} 0 0,${sweepFlag} ${endX},${endY}`;
//                 }
//              });

//              // Update Node Positions
//              node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);

//              // Update Link Label Positions (Handles Arcs)
//              linkLabel
//                  .attr('x', d => {
//                      if (!d.source || !d.target || isNaN(d.source.x) || isNaN(d.target.x)) return 0;
//                      const sx = d.source.x, tx = d.target.x;
//                      const midpointX = (sx + tx) / 2;

//                      // If it's part of a multi-link, offset perpendicularly
//                      if (d.totalLinksInGroup && d.totalLinksInGroup > 1) {
//                          const sy = d.source.y, ty = d.target.y;
//                          const dx = tx - sx, dy = ty - sy;
//                          const dr = Math.sqrt(dx*dx + dy*dy);
//                          if (dr < 1) return midpointX; // Avoid division by zero

//                          const nx = -dy / dr; // Normalized perpendicular vector x
//                          // Tune base offset (5) and incremental offset (8)
//                          // const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 8;
//                          const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 4;
//                          const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));
//                          const sign = (sweepFlag === 1) ? 1 : -1; // Match arc direction
//                          return midpointX + nx * offsetMagnitude * sign;
//                      }
//                      return midpointX; // Default to straight line midpoint
//                  })
//                  .attr('y', d => {
//                      if (!d.source || !d.target || isNaN(d.source.y) || isNaN(d.target.y)) return 0;
//                      const sy = d.source.y, ty = d.target.y;
//                      const midpointY = (sy + ty) / 2;

//                      // If it's part of a multi-link, offset perpendicularly
//                      if (d.totalLinksInGroup && d.totalLinksInGroup > 1) {
//                          const sx = d.source.x, tx = d.target.x;
//                          const dx = tx - sx, dy = ty - sy;
//                          const dr = Math.sqrt(dx*dx + dy*dy);
//                          if (dr < 1) return midpointY; // Avoid division by zero

//                          const ny = dx / dr; // Normalized perpendicular vector y
//                          // Tune base offset (5) and incremental offset (8)
//                          // const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 8;
//                          const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 4;
//                          const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));
//                          const sign = (sweepFlag === 1) ? 1 : -1; // Match arc direction
//                          return midpointY + ny * offsetMagnitude * sign;
//                      }
//                      return midpointY; // Default to straight line midpoint
//                  });
//         } // End ticked()

//         // --- Drag Handlers ---
//         function dragstarted(event, d) {
//             if (!event.active) newSimulation.alphaTarget(0.3).restart();
//             d.fx = d.x; // Fix node position horizontally
//             d.fy = d.y; // Fix node position vertically
//         }
//         function dragged(event, d) {
//             d.fx = event.x;
//             d.fy = event.y;
//         }
//         function dragended(event, d) {
//             if (!event.active) newSimulation.alphaTarget(0); // Release alpha target
//              // Optionally unfix position after drag:
//              // d.fx = null;
//              // d.fy = null;
//         }

//     }, [isBuildingNetwork, nodeColorScale, edgeStyles, handleNodeClick, lastExpandedNodeId, historyIndex]); // Dependencies for useCallback


//   // Main effect for determining data and calling renderGraph
//   useEffect(() => {
//     if (!graphData || !graphData.nodes || !graphData.links) { return; }
//     if (simulationRef.current) { simulationRef.current.stop(); }

//     let nodesToRender = [];
//     let linksFromState = []; // Links with string IDs from graphData state

//     // --- Determine Nodes and Links based on Mode/Filters ---
//     if (isBuildingNetwork) {
//         if (visibleNodeIds.size > 0) {
//             nodesToRender = graphData.nodes.filter(n => visibleNodeIds.has(n.id));
//             const currentVisibleSet = new Set(nodesToRender.map(n => n.id));
//             // Ensure links only connect currently visible nodes
//             linksFromState = graphData.links.filter(link =>
//                 link.source && link.target &&
//                 currentVisibleSet.has(link.source) &&
//                 currentVisibleSet.has(link.target)
//             );
//         } else {
//             nodesToRender = [];
//             linksFromState = [];
//         }
//     } else {
//         // --- Overview Mode: Apply filters ---
//         let potentialNodes = [...graphData.nodes];
//         let potentialLinks = [...graphData.links];
//         let nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));

//         // Filter by Node Type
//         if (selectedNodeType !== 'all') {
//             potentialNodes = potentialNodes.filter(node => node.type === selectedNodeType);
//             nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));
//             // Filter links to only include those connecting the remaining nodes
//             potentialLinks = potentialLinks.filter(link =>
//                 link.source && link.target &&
//                 nodeIdsToKeep.has(link.source) &&
//                 nodeIdsToKeep.has(link.target)
//             );
//         }

//         // Filter by Edge Type
//         if (selectedEdgeType !== 'all') {
//             potentialLinks = potentialLinks.filter(link => link.type === selectedEdgeType);
//             // After filtering links, ensure only nodes involved in these links remain
//             const nodeIdsInFilteredLinks = new Set();
//             potentialLinks.forEach(link => {
//                 if(link.source) nodeIdsInFilteredLinks.add(link.source);
//                 if(link.target) nodeIdsInFilteredLinks.add(link.target);
//             });
//             potentialNodes = potentialNodes.filter(node => nodeIdsInFilteredLinks.has(node.id));
//         }

//         // Filter by Search Term
//         if (searchTerm) {
//             const lowerSearchTerm = searchTerm.toLowerCase();
//             potentialNodes = potentialNodes.filter(node =>
//                 node.label.toLowerCase().includes(lowerSearchTerm) ||
//                 node.type.toLowerCase().includes(lowerSearchTerm) ||
//                 (node.properties && Object.values(node.properties).some(val =>
//                     String(val).toLowerCase().includes(lowerSearchTerm)
//                 ))
//             );
//             nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));
//             // Filter links again based on remaining nodes after search
//             potentialLinks = potentialLinks.filter(link =>
//                  link.source && link.target &&
//                  nodeIdsToKeep.has(link.source) &&
//                  nodeIdsToKeep.has(link.target)
//             );
//         }

//         nodesToRender = potentialNodes;
//         linksFromState = potentialLinks;
//     }

//     // Update rendered node count state
//     setRenderedNodeCount(nodesToRender.length);

//     // --- **NEW**: Pre-process links to identify parallel edges & assign indices ---
//     const linkPairCounts = {}; // Key: sorted 'node1Id-node2Id', Value: { count: N, current: 0 }

//     // First pass: Count links between each pair of nodes
//     linksFromState.forEach(link => {
//         if (!link.source || !link.target) return; // Safety check
//         const ids = [link.source, link.target].sort(); // Sort IDs for a consistent key
//         const pairKey = `${ids[0]}-${ids[1]}`;
//         if (!linkPairCounts[pairKey]) {
//             linkPairCounts[pairKey] = { count: 0, current: 0 }; // Initialize if first time seeing pair
//         }
//         linkPairCounts[pairKey].count++;
//     });

//     // Second pass: Assign index and total count to each link object
//     const processedLinksFromState = linksFromState.map(link => {
//         if (!link.source || !link.target) return link; // Safety check
//         const ids = [link.source, link.target].sort();
//         const pairKey = `${ids[0]}-${ids[1]}`;
//         const groupInfo = linkPairCounts[pairKey];

//         if (!groupInfo) return link; // Should not happen if first pass worked

//         // Assign index within the group (0, 1, 2...) and total count for this pair
//         const linkIndex = groupInfo.current++; // Assign current index, then increment for the next link in this group
//         const totalLinksInGroup = groupInfo.count;

//         // Return a new link object with the added properties
//         return { ...link, linkIndex, totalLinksInGroup };
//     });
//     // --- **END** Link Pre-processing ---

//     // --- Prepare final data for D3's forceSimulation ---
//     // Create a map for quick node object lookup
//     const nodeMap = new Map(nodesToRender.map(node => [node.id, node]));

//     // Map string IDs in links to actual node objects using the nodeMap
//     // Use the processed links which now include arc information
//     const finalLinksForD3 = processedLinksFromState // <-- Use processed links
//         .map(link => ({
//             ...link,
//             source: nodeMap.get(link.source), // Replace source ID with source node object
//             target: nodeMap.get(link.target)  // Replace target ID with target node object
//         }))
//         .filter(link => link.source && link.target); // Ensure both source and target nodes exist in the current view

//     // --- Call Rendering ---
//     if (nodesToRender.length > 0 || isBuildingNetwork) { // Render even if building network has 0 nodes initially
//         renderGraph(nodesToRender, finalLinksForD3);
//     } else {
//         // Clear the graph if no nodes match filters and not in build mode
//         if (svgRef.current) {
//             d3.select(svgRef.current).select('g').remove(); // Remove the main drawing group
//             gRef.current = null; // Clear the ref
//         }
//         if (simulationRef.current) {
//             simulationRef.current.stop(); // Stop any lingering simulation
//             simulationRef.current = null;
//         }
//     }

//     // Cleanup function for when the component unmounts or dependencies change
//     return () => {
//         if (simulationRef.current) {
//             simulationRef.current.stop();
//         }
//     };
//     // Ensure all relevant state variables and the stable renderGraph function are included
//   }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, isBuildingNetwork, visibleNodeIds, renderGraph, lastExpandedNodeId, history, historyIndex]);

//   // --- UI Options ---
//   // const nodeTypeOptions = [ { value: 'all', label: 'All Node Types' }, { value: 'Organization', label: 'Organization' }, { value: 'Country', label: 'Country' }, { value: 'Location', label: 'Location' }, { value: 'Associated Entity', label: 'Associated Entity' }, { value: 'Sector', label: 'Sector' }, { value: 'Government Body', label: 'Government Body' }, ];
//   // const edgeTypeOptions = [ { value: 'all', label: 'All Relationship Types' }, { value: 'OPERATES_AT', label: 'OPERATES_AT' }, { value: 'LOCATED_IN', label: 'LOCATED_IN' }, { value: 'OWNS', label: 'OWNS' }, { value: 'IS_OWNED_BY', label: 'IS_OWNED_BY' }, { value: 'Planned Investment / Strategic Intent', label: 'Planned Investment / Strategic Intent' }, ];

//   const nodeTypeOptions = [
//     { value: 'all', label: 'All Node Types' },
//     { value: 'Organization', label: 'Organization' },
//     { value: 'Country', label: 'Country' },
//     { value: 'Location', label: 'Location' },
//     { value: 'Associated Entity', label: 'Associated Entity' },
//     { value: 'Sector', label: 'Sector' },
//     { value: 'Government Body', label: 'Government Body' },
// ];

//   const edgeTypeOptions = [
//       { value: 'all', label: 'All Relationship Types' },
//       // Sorted alphabetically for better UX in the dropdown
//       { value: 'BELONGS_TO', label: 'BELONGS_TO' },
//       { value: 'Commercial Contract', label: 'Commercial Contract' },
//       { value: 'Established Agricultural Land Use', label: 'Established Agricultural Land Use' },
//       { value: 'Established Environmental / Carbon Credit Deal', label: 'Established Environmental / Carbon Credit Deal' },
//       { value: 'Established Foreign Direct Investment', label: 'Established Foreign Direct Investment' },
//       { value: 'Exploratory Trade and Investment Intent', label: 'Exploratory Trade and Investment Intent' },
//       { value: 'LOCATED_IN', label: 'LOCATED_IN' },
//       { value: 'Memorandum of Understanding (MoU)', label: 'Memorandum of Understanding (MoU)' },
//       { value: 'OPERATES_AT', label: 'OPERATES_AT' },
//       { value: 'OWNS', label: 'OWNS' },
//       { value: 'Ongoing Strategic Energy Investment Programme', label: 'Ongoing Strategic Energy Investment Programme' },
//       { value: 'Planned Investment / Strategic Intent', label: 'Planned Investment / Strategic Intent' },
//       { value: 'Planned Strategic Investment Programme', label: 'Planned Strategic Investment Programme' },
//       { value: 'Signed Bilateral Agreement', label: 'Signed Bilateral Agreement' },
//       { value: 'Signed Defence and Security MoUs', label: 'Signed Defence and Security MoUs' },
//       { value: 'Signed MoU with Future Collaboration Intent', label: 'Signed MoU with Future Collaboration Intent' },
//   ];

//   // --- UI Event Handlers ---
//   const handleReset = () => {
//       setIsBuildingNetwork(false);
//       setVisibleNodeIds(new Set());
//       setHistory([]);
//       setHistoryIndex(-1);
//       setSelectedNodeType('all');
//       setSelectedEdgeType('all');
//       setSearchTerm('');
//       setLastExpandedNodeId(null);
//       // Reset zoom/pan
//       if (svgRef.current && zoomRef.current) {
//           d3.select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity);
//       }
//   };
//   const handleExitBuildMode = () => {
//       setIsBuildingNetwork(false);
//       setVisibleNodeIds(new Set());
//       setHistory([]);
//       setHistoryIndex(-1);
//       setLastExpandedNodeId(null);
//       // Optionally reset zoom, or keep current view
//       // if (svgRef.current && zoomRef.current) {
//       //     d3.select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity);
//       // }
//   };
//   const handleUndo = () => {
//       if (!isBuildingNetwork || historyIndex <= 0) return;
//       const newIndex = historyIndex - 1;
//       setHistoryIndex(newIndex);
//       setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null); // Clear highlight on undo/redo
//   };
//   const handleRedo = () => {
//       if (!isBuildingNetwork || historyIndex >= history.length - 1) return;
//       const newIndex = historyIndex + 1;
//       setHistoryIndex(newIndex);
//       setVisibleNodeIds(history[newIndex]);
//       setLastExpandedNodeId(null); // Clear highlight on undo/redo
//   };

//   // --- JSX ---
//   return (
//     <div className="flex flex-col h-screen bg-gray-50">
//       {/* Control Panel */}
//       <div className="bg-gray-100 p-3 shadow-md z-10 print:hidden">
//         <h1 className="text-xl font-semibold mb-3 text-gray-800">Interactive Knowledge Graph: UAE Investments/Operations</h1>

//         {/* Mode Indicator & History Controls */}
//          {isBuildingNetwork && (
//              <div className="mb-2 p-2 bg-blue-100 border border-blue-300 rounded text-sm flex flex-wrap justify-between items-center gap-2">
//                  <span className="font-medium text-blue-800">Build Mode ({visibleNodeIds.size} nodes visible). Click nodes to expand network.</span>
//                  <div className="flex items-center gap-2">
//                      <button
//                          className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                          onClick={handleUndo}
//                          disabled={historyIndex <= 0}
//                          title="Undo last expansion (Ctrl+Z)">
//                          Undo
//                     </button>
//                      <button
//                          className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
//                          onClick={handleRedo}
//                          disabled={historyIndex >= history.length - 1}
//                          title="Redo expansion (Ctrl+Y)">
//                          Redo
//                      </button>
//                      <button
//                          className="text-blue-700 hover:text-blue-900 text-xs font-medium"
//                          onClick={handleExitBuildMode}
//                          title="Return to filtered/overview mode">
//                          (Exit Build Mode)
//                      </button>
//                  </div>
//              </div>
//          )}

//         {/* Filters & Search Area - Disabled when in Build Mode */}
//         <div className={`flex flex-wrap items-end gap-x-4 gap-y-2 ${isBuildingNetwork ? 'opacity-50 pointer-events-none' : ''}`}>
//             <div>
//                 <label htmlFor="ntf" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label>
//                 <select
//                     id="ntf"
//                     className="w-48 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
//                     value={selectedNodeType}
//                     onChange={e=>setSelectedNodeType(e.target.value)}
//                     disabled={isBuildingNetwork}>
//                         {nodeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="etf" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label>
//                 <select
//                     id="etf"
//                     className="w-52 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
//                     value={selectedEdgeType}
//                     onChange={e=>setSelectedEdgeType(e.target.value)}
//                     disabled={isBuildingNetwork}>
//                         {edgeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
//                 </select>
//             </div>
//             <div>
//                 <label htmlFor="si" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes/Properties</label>
//                 <input
//                     id="si"
//                     type="text"
//                     className="w-48 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
//                     value={searchTerm}
//                     onChange={e=>setSearchTerm(e.target.value)}
//                     placeholder="Name, type, property..."
//                     disabled={isBuildingNetwork}/>
//             </div>
//         </div>

//          {/* Action Buttons Area */}
//          <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
//              <button
//                  className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm font-medium shadow-sm"
//                  onClick={handleReset}
//                  title="Reset filters, search, zoom, and exit build mode">
//                  Reset All
//              </button>
//              <button
//                  className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm"
//                  onClick={() => setShowLegend(!showLegend)}>
//                  {showLegend ? 'Hide Legend' : 'Show Legend'}
//              </button>
//          </div>

//         {/* Legend */}
//         {showLegend && (
//              <div className="bg-white p-3 rounded border border-gray-200 mt-3 text-xs shadow-sm max-w-4xl">
//                  <h3 className="font-semibold mb-2 text-sm text-gray-700">Legend</h3>
//                  <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3">
//                      <div>
//                          <h4 className="font-medium mb-1 text-gray-600">Node Types</h4>
//                          <div className="flex flex-wrap gap-x-4 gap-y-1">
//                              {nodeTypeOptions.filter(o => o.value !== 'all').map(o => (
//                                  <div key={o.value} className="flex items-center">
//                                      <div className="w-3 h-3 rounded-full mr-1.5" style={{ backgroundColor: nodeColorScale[o.value] || '#ccc' }}></div>
//                                      <span>{o.label}</span>
//                                  </div>
//                              ))}
//                          </div>
//                      </div>
//                      <div>
//                          <h4 className="font-medium mb-1 text-gray-600">Relationship Types</h4>
//                          <div className="flex flex-wrap gap-x-4 gap-y-2">
//                              {edgeTypeOptions.filter(o => o.value !== 'all').map(o => {
//                                  const s = edgeStyles[o.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' };
//                                  // Simulate line and arrowhead
//                                  return (
//                                      <div key={o.value} className="flex items-center">
//                                          <svg width="30" height="8" className="mr-1.5 flex-shrink-0">
//                                              {/* Simple line representation */}
//                                              <line x1="0" y1="4" x2="25" y2="4" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeDasharray={s.dasharray}/>
//                                              {/* Simple triangle arrowhead */}
//                                              <polygon points="25,0 30,4 25,8" fill={s.stroke} />
//                                          </svg>
//                                          <span>{o.label}</span>
//                                      </div>
//                                  );
//                              })}
//                          </div>
//                      </div>
//                  </div>
//                  <div className="mt-3 pt-2 border-t border-gray-200 text-gray-500">
//                      <p>
//                          {isBuildingNetwork ? "Build Mode: Click nodes to expand network. Use Undo/Redo. " : "Overview Mode: Use filters/search or click a node to start Build Mode. "}
//                          Drag nodes to reposition. Scroll/pinch to zoom. Hover over nodes for details. Multiple links between two nodes are shown as arcs.
//                      </p>
//                  </div>
//              </div>
//          )}
//       </div>

//       {/* Graph Container */}
//       <div className="flex-grow border-t border-gray-200 overflow-hidden relative">
//         <svg ref={svgRef} id="graph-container" className="w-full h-full">
//            {/* g element will be appended here by D3 */}
//         </svg>

//          {/* Loading / Empty State Messages */}
//          {/* Message when filters result in no nodes (Overview Mode) */}
//          {!isBuildingNetwork && graphData.nodes.length > 0 && renderedNodeCount === 0 && (
//              <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                 No nodes match the current filters or search term.
//              </div>
//          )}
//          {/* Message when Build Mode is active but no nodes are visible yet (shouldn't happen often with current logic) */}
//          {isBuildingNetwork && visibleNodeIds.size === 0 && historyIndex < 0 && (
//               <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                  Click a node in Overview Mode to start building the network.
//               </div>
//           )}
//           {/* Message while initial data is loading */}
//           {graphData.nodes.length === 0 && graphData.links.length === 0 && !isBuildingNetwork && (
//                <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
//                    Loading graph data...
//                </div>
//           )}
//       </div>
//     </div>
//   );
// };

// export default InteractiveKnowledgeGraph;






















import React, { useState, useEffect, useCallback, useRef } from 'react';
import * as d3 from 'd3';

const fullGraphData = {
  "nodes": [
          // --- Entities ---
          {
            "id": "org-adports",
            "label": "AD Ports Group",
            "type": "Organization",
            "properties": {
              "group": "UAE Investor",
              "countryOfOrigin": "UAE",
              "entityNature": "Commercial (State-Linked)",
              "primaryFocus": ["Ports", "Logistics", "Maritime Services", "Industrial Zones"],
              "subType": "Port Operator & Logistics Provider"
            }
          },
          {
            "id": "gov-uae",
            "label": "UAE Government",
            "type": "Government Body",
            "properties": {
              "country": "UAE",
              "entityNature": "National Government",
              "primaryFocus": ["Governance", "National Development", "International Relations"],
              "subType": "Federal Government"
            }
          },
          {
            "id": "org-dpworld",
            "label": "DP World",
            "type": "Organization",
            "properties": {
              "group": "UAE Investor",
              "countryOfOrigin": "UAE",
              "entityNature": "Commercial (State-Linked)",
              "primaryFocus": ["Ports", "Logistics", "Terminals", "Supply Chain Management"],
              "subType": "Global Port Operator & Logistics Provider"
            }
          },
          {
            "id": "entity-ihc",
            "label": "IHC (International Holding Company)",
            "type": "Associated Entity",
            "properties": {
              "group": "UAE Investor",
              "countryOfOrigin": "UAE",
              "entityNature": "Commercial (Publicly Listed Conglomerate)",
              "primaryFocus": ["Investment Holding", "Diversified Conglomerate"],
              "subType": "Holding Company"
            }
          },
          {
            "id": "entity-irh",
            "label": "IRH (International Resources Holding)",
            "type": "Associated Entity",
            "properties": {
              "group": "UAE Investor",
              "countryOfOrigin": "UAE",
              "entityNature": "Commercial",
              "primaryFocus": ["Resources", "Mining Investment"],
              "subType": "Investment Arm / Subsidiary",
              "parentCompany": "IHC"
            }
          },
          {
            "id": "org-pic",
            "label": "Public Investment Corporation SOC Ltd (PIC)",
            "type": "Organization",
            "properties": {
              "countryOfOrigin": "South Africa",
              "entityNature": "State-Owned Corporation (SOC)",
              "primaryFocus": ["Investment Management", "Public Funds"],
              "subType": "State-Owned Investment Corporation"
            }
          },
          {
            "id": "gov-som-fisheries",
            "label": "Somali Ministry of Fisheries & Blue Economy",
            "type": "Government Body", // <-- New Type
            "properties": {
              "country": "Somalia",
              "entityNature": "Government Ministry",
              "primaryFocus": ["Fisheries", "Maritime Economy", "Regulation"],
              "subType": "National Ministry"
            }
          },
          {
            "id": "org-beng-commerce",
            "label": "Benghazi Chamber of Commerce",
            "type": "Organization",
            "properties": {
              "country": "Libya",
              "entityNature": "Business Association",
              "primaryFocus": ["Commerce", "Business Development"],
              "subType": "Chamber of Commerce"
            }
          },
          {
            "id": "org-emaar",
            "label": "Emaar",
            "type": "Organization",
            "properties": {
              "countryOfOrigin": "UAE",
              "entityNature": "Commercial (Publicly Listed)",
              "primaryFocus": ["Real Estate Development", "Property Management"],
              "subType": "Development Company"
            }
          },
          {
            "id": "gov-lib-devagency",
            "label": "National Development Agency (Libya)",
            "type": "Government Body", // <-- New Type
            "properties": {
              "country": "Libya",
              "entityNature": "Government Agency",
              "primaryFocus": ["National Development", "Project Management"],
              "subType": "Development Agency",
              "notes": "Reported as 'Hafter managed' in source"
            }
          },
          {
            "id": "org-gci",
            "label": "GCI",
            "type": "Organization",
            "properties": {
              "group": "UAE Linked",
              "countryOfOrigin": "UAE",
              "entityNature": "Investment Entity (Inferred)",
              "primaryFocus": ["Carbon Credits", "Environmental Projects", "Forestry"],
              "notes": "Associated with UAE takeover of African forests for Blue Carbon deal"
            }
          },
          {
            "id": "org-eap",
            "label": "EAP",
            "type": "Organization",
            "properties": {
              "group": "UAE Linked",
              "countryOfOrigin": "UAE",
              "entityNature": "Agricultural Program/Entity (Inferred, Public-Private)",
              "primaryFocus": ["Agriculture", "Farmland", "Bilateral Agreements"],
              "notes": "Associated with UAE farmlands across Africa"
            }
          },
          {
            "id": "org-tayan",
            "label": "TAYAN",
            "type": "Organization",
            "properties": {
              "group": "UAE Linked",
              "countryOfOrigin": "UAE",
              "entityNature": "Security/Military Entity (Inferred)",
              "primaryFocus": ["Security Agreements", "Military Training"],
              "notes": "Associated with UAE MoUs focused on anti-terrorism & military training"
            }
          },
          {
            "id": "org-masdar",
            "label": "Masdar",
            "type": "Organization",
            "properties": {
              "group": "UAE Investor",
              "countryOfOrigin": "UAE",
              "entityNature": "Commercial (State-Owned)",
              "primaryFocus": ["Renewable Energy", "Sustainable Development", "Energy Transition"],
              "subType": "Renewable Energy Company",
              "ownership": "Abu Dhabi Government (via Mubadala, ADNOC, TAQA)"
            }
          },
          {
            "id": "org-primeragold",
            "label": "Primera Gold",
            "type": "Organization",
            "properties": {
              "entityNature": "Commercial",
              "primaryFocus": ["Mining", "Gold Trading"],
              "subType": "Mining Company / Trading Firm",
              "ownership": "IHC",
              "operationalRegion": ["DRC"]
            }
          },

          // --- Countries ---
          { "id": "country-algeria", "label": "Algeria", "type": "Country" },
          { "id": "country-angola", "label": "Angola", "type": "Country" },
          { "id": "country-botswana", "label": "Botswana", "type": "Country" },
          { "id": "country-burundi", "label": "Burundi", "type": "Country" },
          { "id": "country-chad", "label": "Chad", "type": "Country" },
          { "id": "country-drc", "label": "Democratic Republic of the Congo (DRC)", "type": "Country" },
          { "id": "country-djibouti", "label": "Djibouti", "type": "Country" },
          { "id": "country-egypt", "label": "Egypt", "type": "Country" },
          { "id": "country-eritrea", "label": "Eritrea", "type": "Country" },
          { "id": "country-ethiopia", "label": "Ethiopia", "type": "Country" },
          { "id": "country-ghana", "label": "Ghana", "type": "Country" },
          { "id": "country-guinea", "label": "Guinea", "type": "Country" },
          { "id": "country-kenya", "label": "Kenya", "type": "Country" },
          { "id": "country-liberia", "label": "Liberia", "type": "Country" },
          { "id": "country-libya", "label": "Libya", "type": "Country" },
          { "id": "country-mali", "label": "Mali", "type": "Country" },
          { "id": "country-mauritania", "label": "Mauritania", "type": "Country" },
          { "id": "country-mauritius", "label": "Mauritius", "type": "Country" },
          { "id": "country-morocco", "label": "Morocco", "type": "Country" },
          { "id": "country-mozambique", "label": "Mozambique", "type": "Country" },
          { "id": "country-namibia", "label": "Namibia", "type": "Country" },
          { "id": "country-nigeria", "label": "Nigeria", "type": "Country" },
          { "id": "country-congo", "label": "Republic of Congo (Congo-Brazzaville)", "type": "Country" },
          { "id": "country-rwanda", "label": "Rwanda", "type": "Country" },
          { "id": "country-senegal", "label": "Senegal", "type": "Country" },
          { "id": "country-somalia", "label": "Somalia", "type": "Country" },
          { "id": "country-somaliland", "label": "Somaliland", "type": "Country", "properties": {"status": "Disputed/Unrecognized"} },
          { "id": "country-southafrica", "label": "South Africa", "type": "Country" },
          { "id": "country-sudan", "label": "Sudan", "type": "Country" },
          { "id": "country-tanzania", "label": "Tanzania", "type": "Country" },
          { "id": "country-uganda", "label": "Uganda", "type": "Country" },
          { "id": "country-zambia", "label": "Zambia", "type": "Country" },
          { "id": "country-zimbabwe", "label": "Zimbabwe", "type": "Country" },

          // --- Locations ---
          { "id": "loc-djazair", "label": "Djazair", "type": "Location", "properties": {"country": "Algeria", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
          { "id": "loc-kamsar", "label": "Kamsar", "type": "Location", "properties": {"country": "Guinea", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
          { "id": "loc-pointe-noire", "label": "Pointe Noire", "type": "Location", "properties": {"country": "Republic of Congo (Congo-Brazzaville)", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
          { "id": "loc-banana", "label": "Banana", "type": "Location", "properties": {"country": "DRC", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
          { "id": "loc-luanda", "label": "Luanda", "type": "Location", "properties": {"country": "Angola", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
          { "id": "loc-lamu", "label": "Lamu", "type": "Location", "properties": {"country": "Kenya", "kind": "Port", "status": "Operated/Under Construction", "operatorGroup": "AD Ports"} },
          { "id": "loc-dakar", "label": "Dakar", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-ndayane", "label": "Ndayane", "type": "Location", "properties": {"country": "Senegal", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-kigali", "label": "Kigali", "type": "Location", "properties": {"country": "Rwanda", "kind": "Logistics Platform/Hub", "status": "Operated/Under Construction", "operatorGroup": "DP World/Other Logistics"} },
          { "id": "loc-west-port-said", "label": "West Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-east-port-said", "label": "East Port Said", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-al-arish", "label": "Al Arish", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-sharm-el-sheikh", "label": "Sharm El Sheikh", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-hurghada", "label": "Hurghada", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-safaga", "label": "Safaga", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-sokhna", "label": "Sokhna", "type": "Location", "properties": {"country": "Egypt", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-bosaso", "label": "Bosaso", "type": "Location", "properties": {"country": "Somalia", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-berbera", "label": "Berbera", "type": "Location", "properties": {"country": "Somaliland", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-djibouti-port", "label": "Djibouti Port", "type": "Location", "properties": {"country": "Djibouti", "kind": "Port/Logistics Platform", "status": "Disputed", "operatorGroup": "DP World"} },
          { "id": "loc-dar-es-salaam", "label": "Dar es Salaam", "type": "Location", "properties": {"country": "Tanzania", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-maputo", "label": "Maputo", "type": "Location", "properties": {"country": "Mozambique", "kind": "Port/Logistics Platform", "status": "Operated/Under Construction", "operatorGroup": "DP World"} },
          { "id": "loc-abu-amama", "label": "Abu Amama", "type": "Location", "properties": {"country": "Sudan", "kind": "Port/Logistics Hub", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
          { "id": "loc-komatipoort", "label": "Komatipoort", "type": "Location", "properties": {"country": "South Africa", "kind": "Logistics Hub/Terminal", "status": "Operated/Under Construction", "operatorGroup": "Other Logistics"} },
          {
            "id": "loc-elmreisa",
            "label": "Elmreisa Free Zone (EFZ)",
            "type": "Location",
            "properties": {
              "country": "Libya",
              "kind": "Free Zone",
              "primaryFocus": ["Economic Development", "Trade"],
              "status": "Under Development/Planned"
            }
          },

          // --- Sectors ---
          { "id": "sector-mining", "label": "Mining", "type": "Sector" },
          { "id": "sector-fisheries-blue-economy", "label": "Fisheries & Blue Economy", "type": "Sector" },
          { "id": "sector-ports-maritime", "label": "Ports & Maritime", "type": "Sector" },
          { "id": "sector-development-project", "label": "Development Project", "type": "Sector" },
          { "id": "sector-free-zone", "label": "Free Zone", "type": "Sector" },
          { "id": "sector-carbon-forestry", "label": "Carbon & Forestry", "type": "Sector" },
          { "id": "sector-agriculture-farmland", "label": "Agriculture & Farmland", "type": "Sector" },
          { "id": "sector-security-military", "label": "Security & Military", "type": "Sector" },
          { "id": "sector-energy-transition", "label": "Energy Transition", "type": "Sector" },
          { "id": "sector-trade-investment", "label": "Trade & Investment", "type": "Sector" },
          { "id": "sector-energy", "label": "Energy", "type": "Sector" },
          { "id": "sector-water", "label": "Water", "type": "Sector" },
          { "id": "sector-agriculture", "label": "Agriculture", "type": "Sector" },
          { "id": "sector-health", "label": "Health", "type": "Sector" },
          { "id": "sector-airports", "label": "Airports", "type": "Sector" },
          { "id": "sector-logistics", "label": "Logistics", "type": "Sector" },
          { "id": "sector-ict", "label": "ICT", "type": "Sector" }
  ],

  "edges": [
      // --- OPERATES_AT ---
      { "source": "org-adports", "target": "loc-djazair", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-adports", "target": "loc-kamsar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-adports", "target": "loc-pointe-noire", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-adports", "target": "loc-banana", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-adports", "target": "loc-luanda", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-adports", "target": "loc-lamu", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-dakar", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-ndayane", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-kigali", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-west-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-east-port-said", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-al-arish", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-sharm-el-sheikh", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-hurghada", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-safaga", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-sokhna", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-bosaso", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-berbera", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-djibouti-port", "label": "OPERATES_AT", "properties": {"status": "Disputed"} },
      { "source": "org-dpworld", "target": "loc-dar-es-salaam", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },
      { "source": "org-dpworld", "target": "loc-maputo", "label": "OPERATES_AT", "properties": {"status": "Operated/Under Construction"} },

      // --- LOCATED_IN ---
      { "source": "loc-djazair", "target": "country-algeria", "label": "LOCATED_IN" },
      { "source": "loc-dakar", "target": "country-senegal", "label": "LOCATED_IN" },
      { "source": "loc-ndayane", "target": "country-senegal", "label": "LOCATED_IN" },
      { "source": "loc-kamsar", "target": "country-guinea", "label": "LOCATED_IN" },
      { "source": "loc-kigali", "target": "country-rwanda", "label": "LOCATED_IN" },
      { "source": "loc-pointe-noire", "target": "country-congo", "label": "LOCATED_IN" },
      { "source": "loc-banana", "target": "country-drc", "label": "LOCATED_IN" },
      { "source": "loc-luanda", "target": "country-angola", "label": "LOCATED_IN" },
      { "source": "loc-lamu", "target": "country-kenya", "label": "LOCATED_IN" },
      { "source": "loc-west-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
      { "source": "loc-east-port-said", "target": "country-egypt", "label": "LOCATED_IN" },
      { "source": "loc-al-arish", "target": "country-egypt", "label": "LOCATED_IN" },
      { "source": "loc-sharm-el-sheikh", "target": "country-egypt", "label": "LOCATED_IN" },
      { "source": "loc-hurghada", "target": "country-egypt", "label": "LOCATED_IN" },
      { "source": "loc-safaga", "target": "country-egypt", "label": "LOCATED_IN" },
      { "source": "loc-sokhna", "target": "country-egypt", "label": "LOCATED_IN" },
      { "source": "loc-abu-amama", "target": "country-sudan", "label": "LOCATED_IN" },
      { "source": "loc-bosaso", "target": "country-somalia", "label": "LOCATED_IN" },
      { "source": "loc-berbera", "target": "country-somaliland", "label": "LOCATED_IN" },
      { "source": "loc-djibouti-port", "target": "country-djibouti", "label": "LOCATED_IN" },
      { "source": "loc-dar-es-salaam", "target": "country-tanzania", "label": "LOCATED_IN" },
      { "source": "loc-maputo", "target": "country-mozambique", "label": "LOCATED_IN" },
      { "source": "loc-komatipoort", "target": "country-southafrica", "label": "LOCATED_IN" },
      { "source": "loc-elmreisa", "target": "country-libya", "label": "LOCATED_IN" },

      { "source": "entity-ihc", "target": "entity-irh", "label": "OWNS" },
      { "source": "entity-ihc", "target": "org-primeragold", "label": "OWNS" },

      { "source": "org-pic", "target": "country-southafrica", "label": "BELONGS_TO" },
      { "source": "entity-ihc", "target": "gov-uae", "label": "BELONGS_TO" },
      { "source": "gov-som-fisheries", "target": "country-somalia", "label": "BELONGS_TO" },
      { "source": "gov-lib-devagency", "target": "country-libya", "label": "BELONGS_TO" },
      { "source": "org-masdar", "target": "gov-uae", "label": "BELONGS_TO" },

      { "source": "org-primeragold", "target": "country-drc", "label": "Signed Bilateral Agreement", "properties": {} },
      { "source": "gov-som-fisheries", "target": "org-adports", "label": "Signed MoU with Future Collaboration Intent", "properties": {} },
      { "source": "entity-irh", "target": "org-pic", "label": "Memorandum of Understanding (MoU)", "properties": {} },
      { "source": "org-emaar", "target": "gov-lib-devagency", "label": "Commercial Contract", "properties": {} },
      { "source": "org-dpworld", "target": "country-ghana", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
      { "source": "org-dpworld", "target": "country-botswana", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
      { "source": "org-dpworld", "target": "country-senegal", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
      { "source": "org-dpworld", "target": "country-algeria", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
      { "source": "org-dpworld", "target": "country-mozambique", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
      { "source": "org-dpworld", "target": "country-rwanda", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
      { "source": "org-dpworld", "target": "country-djibouti", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },
      { "source": "org-dpworld", "target": "country-egypt", "label": "Planned Strategic Investment Programme", "properties": {"amount_USD_B": 3, "year": 2029, "sector": "Logistics and ports"} },

      { "source": "gov-uae", "target": "country-liberia", "label": "Established Environmental / Carbon Credit Deal", "properties": {} },

      { "source": "gov-uae", "target": "country-nigeria", "label": "Established Agricultural Land Use", "properties": {} },
      { "source": "gov-uae", "target": "country-namibia", "label": "Established Agricultural Land Use", "properties": {} },
      { "source": "gov-uae", "target": "country-ethiopia", "label": "Established Agricultural Land Use", "properties": {} },

      { "source": "gov-uae", "target": "country-morocco", "label": "Signed Defence and Security MoUs", "properties": {} },
      { "source": "gov-uae", "target": "country-mauritania", "label": "Signed Defence and Security MoUs", "properties": {} },
      { "source": "gov-uae", "target": "country-chad", "label": "Signed Defence and Security MoUs", "properties": {} },
      { "source": "gov-uae", "target": "country-eritrea", "label": "Signed Defence and Security MoUs", "properties": {} },
      { "source": "gov-uae", "target": "country-mali", "label": "Signed Defence and Security MoUs", "properties": {} },
      { "source": "gov-uae", "target": "country-guinea", "label": "Signed Defence and Security MoUs", "properties": {} },

      { "source": "org-masdar", "target": "country-congo", "label": "Ongoing Strategic Energy Investment Programme", "properties": {} },
      { "source": "gov-uae", "target": "country-mauritius", "label": "Exploratory Trade and Investment Intent", "properties": {} },
      { "source": "gov-uae", "target": "country-uganda", "label": "Established Foreign Direct Investment", "properties": {} },

      { "source": "entity-irh", "target": "country-kenya", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
      { "source": "entity-irh", "target": "country-tanzania", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
      { "source": "entity-irh", "target": "country-burundi", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
      { "source": "entity-irh", "target": "country-zambia", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
      { "source": "entity-irh", "target": "country-angola", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
      { "source": "entity-irh", "target": "country-zimbabwe", "label": "Planned Investment / Strategic Intent", "properties": {"sector": "Mining", "plan_ref": "IHC 1B 2024"} },
      { "source": "entity-irh", "target": "sector-mining", "label": "Planned Investment / Strategic Intent", "properties": {"amount_USD_B": 1, "year": 2024, "funding_source": "IHC"} },

    ]
};

const InteractiveKnowledgeGraph = () => {
  // --- State Variables ---
  const [selectedNodeType, setSelectedNodeType] = useState('all');
  const [selectedEdgeType, setSelectedEdgeType] = useState('all');
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const simulationRef = useRef(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [showLegend, setShowLegend] = useState(true);
  const [isBuildingNetwork, setIsBuildingNetwork] = useState(false);
  const [visibleNodeIds, setVisibleNodeIds] = useState(new Set());
  const [lastExpandedNodeId, setLastExpandedNodeId] = useState(null);
  const [history, setHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [renderedNodeCount, setRenderedNodeCount] = useState(0);

  // Refs for D3 elements / behaviors
  const svgRef = useRef(null);
  const gRef = useRef(null);
  const zoomRef = useRef(null);

  // --- Configuration ---
  const nodeColorScale = {
      'Organization': '#4285F4', // Blue
      'Country': '#EA4335',      // Red
      'Location': '#FBBC05',     // Yellow
      'Associated Entity': '#34A853', // Green
      'Sector': '#F4B400',       // Orange
      'Government Body': '#800080', // Purple
  };

  const edgeStyles = {
      // Core Operations & Location
      'OPERATES_AT': { stroke: '#666', strokeWidth: 2, dasharray: '0' }, // Dark grey, solid, thicker
      'LOCATED_IN': { stroke: '#D93025', strokeWidth: 1, dasharray: '0' }, // Red, solid, thinner

      // Ownership & Structure
      'OWNS': { stroke: '#2ca02c', strokeWidth: 1.5, dasharray: '0' }, // Green, solid
      'BELONGS_TO': { stroke: '#20B2AA', strokeWidth: 1.5, dasharray: '0' }, // LightSeaGreen, solid (Distinguish from OWNS slightly)

      // Planned / Intent / Future Programmes
      'Planned Investment / Strategic Intent': { stroke: '#FF69B4', strokeWidth: 1.5, dasharray: '4,4'}, // HotPink, dashed
      'Planned Strategic Investment Programme': { stroke: '#8A2BE2', strokeWidth: 1.5, dasharray: '5,5'}, // BlueViolet, dashed
      'Exploratory Trade and Investment Intent': { stroke: '#FFC0CB', strokeWidth: 1.5, dasharray: '2,4'}, // Pink (lighter), dashed

      // Agreements / MoUs / Contracts
      'Signed Bilateral Agreement': { stroke: '#1E90FF', strokeWidth: 1.2, dasharray: '4,2' }, // DodgerBlue, dashed
      'Signed MoU with Future Collaboration Intent': { stroke: '#1E90FF', strokeWidth: 1.2, dasharray: '4,2' }, // DodgerBlue, dashed
      'Memorandum of Understanding (MoU)': { stroke: '#1E90FF', strokeWidth: 1.2, dasharray: '4,2' }, // DodgerBlue, dashed
      'Commercial Contract': { stroke: '#1E90FF', strokeWidth: 1.2, dasharray: '4,2' }, // DodgerBlue, dashed
      'Signed Defence and Security MoUs': { stroke: '#4682B4', strokeWidth: 1.2, dasharray: '6,2' }, // SteelBlue, dashed (Slightly different for Defence)

      // Established Deals / Status / Ongoing
      'Established Environmental / Carbon Credit Deal': { stroke: '#008080', strokeWidth: 1.2, dasharray: '0' }, // Teal, solid
      'Established Agricultural Land Use': { stroke: '#008080', strokeWidth: 1.2, dasharray: '0' }, // Teal, solid
      'Established Foreign Direct Investment': { stroke: '#008080', strokeWidth: 1.2, dasharray: '0' }, // Teal, solid
      'Ongoing Strategic Energy Investment Programme': { stroke: '#FFA500', strokeWidth: 1.5, dasharray: '6,3' }, // Orange, dashed
};

  // --- Effects ---

  // Load initial full data only once and process it for the state
  useEffect(() => {
    const validNodes = fullGraphData.nodes.filter(n => n && n.id);
    const nodeIds = new Set(validNodes.map(n => n.id));
    const validEdges = fullGraphData.edges.filter(e => {
        if (!e || !e.source || !e.target || !e.label) { return false; }
        if (!nodeIds.has(e.source)) { return false; }
        if (!nodeIds.has(e.target)) { return false; }
        return true;
    });
    // Map 'label' to 'type' for consistency in link objects used by D3
    const linksForState = validEdges.map(edge => ({ ...edge, source: edge.source, target: edge.target, type: edge.label }));
    setGraphData({ nodes: validNodes, links: linksForState });
    // console.log("Initial graph data loaded and processed.");
  }, []);

  // Initialize D3 zoom behavior once
   useEffect(() => {
       if (svgRef.current && !zoomRef.current) {
           zoomRef.current = d3.zoom()
               .scaleExtent([0.1, 8])
               .on('zoom', (event) => { if (gRef.current) { d3.select(gRef.current).attr('transform', event.transform); } });
           d3.select(svgRef.current).call(zoomRef.current);
           d3.select(svgRef.current).call(zoomRef.current.transform, d3.zoomIdentity);
       }
   }, []);

    // --- Node Click Handler (Memoized) ---
    const handleNodeClick = useCallback((event, clickedNodeData) => {
        event.stopPropagation();
        if (!graphData || !graphData.links) { return; }
        const clickedId = clickedNodeData.id;
        let nextVisibleIds;

        if (!isBuildingNetwork) {
            setIsBuildingNetwork(true);
            const initialVisibleIds = new Set([clickedId]);
            graphData.links.forEach(link => {
                if (link.source === clickedId && link.target) initialVisibleIds.add(link.target);
                else if (link.target === clickedId && link.source) initialVisibleIds.add(link.source);
            });
            nextVisibleIds = new Set([...initialVisibleIds].filter(id => id != null));
            const newHistory = [nextVisibleIds];
            setHistory(newHistory); setHistoryIndex(0);
            setVisibleNodeIds(nextVisibleIds); setLastExpandedNodeId(clickedId);
        } else {
             const currentVisibleIds = history[historyIndex];
             if (!currentVisibleIds) { return; }
            const neighborsToExpand = new Set();
            graphData.links.forEach(link => {
                if (link.source === clickedId && link.target && !currentVisibleIds.has(link.target)) { neighborsToExpand.add(link.target); }
                else if (link.target === clickedId && link.source && !currentVisibleIds.has(link.source)) { neighborsToExpand.add(link.source); }
            });
            const validNeighbors = new Set([...neighborsToExpand].filter(id => id != null));
            if (validNeighbors.size > 0) {
                nextVisibleIds = new Set([...currentVisibleIds, ...validNeighbors]);
                // Ensure the clicked node itself remains visible even if expanding from it
                nextVisibleIds.add(clickedId);
                const newHistory = history.slice(0, historyIndex + 1); newHistory.push(nextVisibleIds);
                setHistory(newHistory); setHistoryIndex(newHistory.length - 1);
                setVisibleNodeIds(nextVisibleIds); setLastExpandedNodeId(clickedId);
            } else {
                // Still update last expanded even if no new neighbors added
                setLastExpandedNodeId(clickedId);
            }
        }
    }, [isBuildingNetwork, graphData, history, historyIndex]);


   // --- D3 Rendering Function (Memoized) ---
   // Now expects links to potentially have linkIndex and totalLinksInGroup properties
   const renderGraph = useCallback((nodes, links) => {
        const container = d3.select(svgRef.current)?.node()?.parentNode;
        if (!container || !svgRef.current) { return null; }
        const width = container.clientWidth || 1000; const height = container.clientHeight || 700;
        const svg = d3.select(svgRef.current).attr('width', '100%').attr('height', '100%').attr('viewBox', [0, 0, width, height]).attr('preserveAspectRatio', 'xMidYMid meet');

        if(zoomRef.current) { svg.call(zoomRef.current); } else { return null; /* Should be initialized */ }
        let g;
        if (gRef.current) { g = d3.select(gRef.current); g.selectAll('*').remove(); } else { g = svg.append('g'); gRef.current = g.node(); }
        if (zoomRef.current) { const currentTransform = d3.zoomTransform(svg.node()); g.attr('transform', currentTransform); }

        g.append('defs').append('marker').attr('id', 'arrowhead').attr('viewBox', '0 -5 10 10').attr('refX', 25).attr('refY', 0).attr('markerWidth', 6).attr('markerHeight', 6).attr('orient', 'auto').append('path').attr('d', 'M0,-5L10,0L0,5').attr('fill', '#999');

        // Link paths
        const link = g.append('g')
            .attr('class', 'links')
            .selectAll('path')
            // Key function using type should be sufficient for given data, but could add index if needed
            .data(links, d => `${d.source.id}-${d.target.id}-${d.type}`)
            .join('path')
            .attr('class', 'link')
            .attr('stroke', d => edgeStyles[d.type]?.stroke || '#bbb')
            .attr('stroke-width', d => edgeStyles[d.type]?.strokeWidth || 1)
            .attr('stroke-dasharray', d => edgeStyles[d.type]?.dasharray || '0')
            .attr('fill', 'none')
            .attr('marker-end', 'url(#arrowhead)');

        // Node groups (circle + text + title)
        const node = g.append('g')
            .attr('class', 'nodes')
            .selectAll('g')
            .data(nodes, d => d.id)
            .join('g')
            .attr('class', 'node')
            .style('cursor', 'pointer')
            .on('click', handleNodeClick)
            .call(d3.drag().on('start', dragstarted).on('drag', dragged).on('end', dragended));

        node.append('circle')
            .attr('r', 12)
            .attr('fill', d => nodeColorScale[d.type] || '#ccc')
            // Highlight last clicked/expanded node
            .attr('stroke', d => d.id === lastExpandedNodeId ? '#f00' : '#fff')
            .attr('stroke-width', d => d.id === lastExpandedNodeId ? 3 : 1.5);

        node.append('text')
            .attr('dx', 18)
            .attr('dy', 5)
            .text(d => d.label)
            .style('font-size', '11px')
            .style('font-family', 'sans-serif')
            .style('paint-order', 'stroke')
            .style('stroke', '#fff')
            .style('stroke-width', '3px')
            .style('stroke-linecap', 'butt')
            .style('fill', '#333')
            .attr('pointer-events', 'none'); // Prevent text from blocking node click

        // Tooltip on hover
        node.append('title')
            .text(d => {
                let tt = `${d.label}\nType: ${d.type}`;
                if (d.properties) {
                    tt += `\n--- Properties ---\n${Object.entries(d.properties)
                        .map(([k, v]) => `${k}: ${Array.isArray(v) ? v.join(', ') : v}`)
                        .join('\n')}`;
                }
                return tt;
            });

        // Link labels
        const linkLabel = g.append('g')
            .attr('class', 'link-labels')
            .selectAll('text')
            // Key function using type should be sufficient
            .data(links, d => `${d.source.id}-${d.target.id}-${d.type}`)
            .join("text")
            .attr('class', 'link-label')
            .attr('dy', -5) // Base vertical offset
            .style('font-size', '9px')
            .style('font-family', 'sans-serif')
            .style('fill', '#555')
            .style('text-anchor', 'middle')
            .attr('pointer-events', 'none') // Prevent labels interfering with interaction
            .text(d => d.type);

        // --- Force Simulation Setup ---
        if (simulationRef.current) { simulationRef.current.stop(); }
        const newSimulation = d3.forceSimulation(nodes)
            .force('link', d3.forceLink(links).id(d => d.id).distance(isBuildingNetwork ? 160 : 130).strength(0.4))
            .force('charge', d3.forceManyBody().strength(isBuildingNetwork ? -700 : -450))
            .force('center', d3.forceCenter(width / 2, height / 2))
            .force('collision', d3.forceCollide().radius(isBuildingNetwork ? 45 : 35))
            .on('tick', ticked);
        simulationRef.current = newSimulation;

        // --- Ticked Function (Updates Positions) ---
        function ticked() {
             if (!gRef.current || !nodes.length) return; // Exit if graph is cleared or not ready

             // Update Link Paths (Handles Arcs)
             link.attr('d', d => {
                 // Basic validation
                if (!d.source || !d.target || isNaN(d.source.x) || isNaN(d.source.y) || isNaN(d.target.x) || isNaN(d.target.y)) {
                    return "M0,0"; // Avoid errors if nodes disappear or coords invalid
                }

                const sx = d.source.x;
                const sy = d.source.y;
                const tx = d.target.x;
                const ty = d.target.y;
                const dx = tx - sx;
                const dy = ty - sy;
                const dr = Math.sqrt(dx * dx + dy * dy);
                const r = 12; // node radius
                const arrowOffset = 8; // Space for arrowhead

                // Prevent drawing if nodes are virtually overlapping
                if (dr < r * 2) return "M0,0";

                // Check if this link is part of a multi-link pair
                // The properties linkIndex and totalLinksInGroup are added during pre-processing
                const isMultiLink = d.totalLinksInGroup && d.totalLinksInGroup > 1;

                if (!isMultiLink) {
                    // --- Draw Straight Line ---
                    const gamma = Math.atan2(dy, dx); // Angle of the line
                    // Adjust start/end points for node radius and arrow offset
                    const startX = sx + Math.cos(gamma) * (r + 1.5);
                    const startY = sy + Math.sin(gamma) * (r + 1.5);
                    const endX = tx - Math.cos(gamma) * (r + 1.5 + arrowOffset);
                    const endY = ty - Math.sin(gamma) * (r + 1.5 + arrowOffset);
                    // Check adjusted distance
                    if (Math.sqrt((endX - startX)**2 + (endY - startY)**2) < 1) return "M0,0";
                    return `M${startX},${startY}L${endX},${endY}`;
                } else {
                    // --- Draw Curved Arc ---
                    // Determine sweep-flag (direction) based on index (alternating)
                    // Ensure consistent direction regardless of source/target order for the pair
                    // Use linkIndex (0, 1, 2, 3...)
                    const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));

                    // Arc radius - increase slightly for links further out in the bundle
                    // Tune the multiplier (0.15) for desired curvature separation
                    // const curvatureFactor = 0.15 * (Math.floor(d.linkIndex / 2) + 1);
                    const curvatureFactor = 0.08 * (Math.floor(d.linkIndex / 2) + 1);

                    const arcRadius = dr / 2 * (1 + curvatureFactor); // Base radius on half distance + curve factor

                    // Calculate rough start/end points adjusted for the arc
                    // This is an approximation; precise tangents are more complex
                    const midpointX = (sx + tx) / 2;
                    const midpointY = (sy + ty) / 2;
                    const angle = Math.atan2(dy, dx);
                    // Calculate the height of the arc's center from the midpoint using Pythagoras
                    // Use || 0 to handle potential floating point issues if arcRadius ~ dr/2
                    const curveHeight = Math.sqrt(Math.max(0, arcRadius**2 - (dr/2)**2)) || 0;
                    const offsetSign = (sweepFlag === 1) ? 1 : -1;
                    // Perpendicular vector component to find control point
                    const controlX = midpointX + curveHeight * Math.sin(angle) * offsetSign;
                    const controlY = midpointY - curveHeight * Math.cos(angle) * offsetSign;

                    // Approximate angles from nodes to the control point to adjust start/end
                    const startAngle = Math.atan2(controlY - sy, controlX - sx);
                    const endAngle = Math.atan2(ty - controlY, tx - controlX); // Angle from control point to target

                    const startX = sx + Math.cos(startAngle) * (r + 1.5);
                    const startY = sy + Math.sin(startAngle) * (r + 1.5);
                    const endX = tx - Math.cos(endAngle) * (r + 1.5 + arrowOffset); // Adjust target using endAngle
                    const endY = ty - Math.sin(endAngle) * (r + 1.5 + arrowOffset);

                    // Check validity before returning path string
                    if(isNaN(startX+startY+endX+endY)) return "M0,0";

                    // SVG Arc path: M startX,startY A rx,ry x-axis-rotation large-arc-flag,sweep-flag endX,endY
                    // large-arc-flag is 0 because we want the shorter arc path
                    return `M${startX},${startY} A${arcRadius},${arcRadius} 0 0,${sweepFlag} ${endX},${endY}`;
                }
             });

             // Update Node Positions
             node.attr('transform', d => `translate(${d.x || 0}, ${d.y || 0})`);

             // Update Link Label Positions (Handles Arcs)
             linkLabel
                 .attr('x', d => {
                     if (!d.source || !d.target || isNaN(d.source.x) || isNaN(d.target.x)) return 0;
                     const sx = d.source.x, tx = d.target.x;
                     const midpointX = (sx + tx) / 2;

                     // If it's part of a multi-link, offset perpendicularly
                     if (d.totalLinksInGroup && d.totalLinksInGroup > 1) {
                         const sy = d.source.y, ty = d.target.y;
                         const dx = tx - sx, dy = ty - sy;
                         const dr = Math.sqrt(dx*dx + dy*dy);
                         if (dr < 1) return midpointX; // Avoid division by zero

                         const nx = -dy / dr; // Normalized perpendicular vector x
                         // Tune base offset (5) and incremental offset (8)
                         // const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 8;
                         const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 4;
                         const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));
                         const sign = (sweepFlag === 1) ? 1 : -1; // Match arc direction
                         return midpointX + nx * offsetMagnitude * sign;
                     }
                     return midpointX; // Default to straight line midpoint
                 })
                 .attr('y', d => {
                     if (!d.source || !d.target || isNaN(d.source.y) || isNaN(d.target.y)) return 0;
                     const sy = d.source.y, ty = d.target.y;
                     const midpointY = (sy + ty) / 2;

                     // If it's part of a multi-link, offset perpendicularly
                     if (d.totalLinksInGroup && d.totalLinksInGroup > 1) {
                         const sx = d.source.x, tx = d.target.x;
                         const dx = tx - sx, dy = ty - sy;
                         const dr = Math.sqrt(dx*dx + dy*dy);
                         if (dr < 1) return midpointY; // Avoid division by zero

                         const ny = dx / dr; // Normalized perpendicular vector y
                         // Tune base offset (5) and incremental offset (8)
                         // const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 8;
                         const offsetMagnitude = 5 + Math.floor(d.linkIndex / 2) * 4;
                         const sweepFlag = (d.source.id < d.target.id) ? (d.linkIndex % 2) : (1 - (d.linkIndex % 2));
                         const sign = (sweepFlag === 1) ? 1 : -1; // Match arc direction
                         return midpointY + ny * offsetMagnitude * sign;
                     }
                     return midpointY; // Default to straight line midpoint
                 });
        } // End ticked()

        // --- Drag Handlers ---
        function dragstarted(event, d) {
            if (!event.active) newSimulation.alphaTarget(0.3).restart();
            d.fx = d.x; // Fix node position horizontally
            d.fy = d.y; // Fix node position vertically
        }
        function dragged(event, d) {
            d.fx = event.x;
            d.fy = event.y;
        }
        function dragended(event, d) {
            if (!event.active) newSimulation.alphaTarget(0); // Release alpha target
             // Optionally unfix position after drag:
             // d.fx = null;
             // d.fy = null;
        }

    }, [isBuildingNetwork, nodeColorScale, edgeStyles, handleNodeClick, lastExpandedNodeId, historyIndex]); // Dependencies for useCallback


  // Main effect for determining data and calling renderGraph
  useEffect(() => {
    if (!graphData || !graphData.nodes || !graphData.links) { return; }
    if (simulationRef.current) { simulationRef.current.stop(); }

    let nodesToRender = [];
    let linksFromState = []; // Links with string IDs from graphData state

    // --- Determine Nodes and Links based on Mode/Filters ---
    if (isBuildingNetwork) {
        if (visibleNodeIds.size > 0) {
            nodesToRender = graphData.nodes.filter(n => visibleNodeIds.has(n.id));
            const currentVisibleSet = new Set(nodesToRender.map(n => n.id));
            // Ensure links only connect currently visible nodes
            linksFromState = graphData.links.filter(link =>
                link.source && link.target &&
                currentVisibleSet.has(link.source) &&
                currentVisibleSet.has(link.target)
            );
        } else {
            nodesToRender = [];
            linksFromState = [];
        }
    } else {
        // --- Overview Mode: Apply filters ---
        let potentialNodes = [...graphData.nodes];
        let potentialLinks = [...graphData.links];
        let nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));

        // Filter by Node Type
        if (selectedNodeType !== 'all') {
            potentialNodes = potentialNodes.filter(node => node.type === selectedNodeType);
            nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));
            // Filter links to only include those connecting the remaining nodes
            potentialLinks = potentialLinks.filter(link =>
                link.source && link.target &&
                nodeIdsToKeep.has(link.source) &&
                nodeIdsToKeep.has(link.target)
            );
        }

        // Filter by Edge Type
        if (selectedEdgeType !== 'all') {
            potentialLinks = potentialLinks.filter(link => link.type === selectedEdgeType);
            // After filtering links, ensure only nodes involved in these links remain
            const nodeIdsInFilteredLinks = new Set();
            potentialLinks.forEach(link => {
                if(link.source) nodeIdsInFilteredLinks.add(link.source);
                if(link.target) nodeIdsInFilteredLinks.add(link.target);
            });
            potentialNodes = potentialNodes.filter(node => nodeIdsInFilteredLinks.has(node.id));
        }

        // Filter by Search Term
        if (searchTerm) {
            const lowerSearchTerm = searchTerm.toLowerCase();
            potentialNodes = potentialNodes.filter(node =>
                node.label.toLowerCase().includes(lowerSearchTerm) ||
                node.type.toLowerCase().includes(lowerSearchTerm) ||
                (node.properties && Object.values(node.properties).some(val =>
                    String(val).toLowerCase().includes(lowerSearchTerm)
                ))
            );
            nodeIdsToKeep = new Set(potentialNodes.map(node => node.id));
            // Filter links again based on remaining nodes after search
            potentialLinks = potentialLinks.filter(link =>
                 link.source && link.target &&
                 nodeIdsToKeep.has(link.source) &&
                 nodeIdsToKeep.has(link.target)
            );
        }

        nodesToRender = potentialNodes;
        linksFromState = potentialLinks;
    }

    // Update rendered node count state
    setRenderedNodeCount(nodesToRender.length);

    // --- **NEW**: Pre-process links to identify parallel edges & assign indices ---
    const linkPairCounts = {}; // Key: sorted 'node1Id-node2Id', Value: { count: N, current: 0 }

    // First pass: Count links between each pair of nodes
    linksFromState.forEach(link => {
        if (!link.source || !link.target) return; // Safety check
        const ids = [link.source, link.target].sort(); // Sort IDs for a consistent key
        const pairKey = `${ids[0]}-${ids[1]}`;
        if (!linkPairCounts[pairKey]) {
            linkPairCounts[pairKey] = { count: 0, current: 0 }; // Initialize if first time seeing pair
        }
        linkPairCounts[pairKey].count++;
    });

    // Second pass: Assign index and total count to each link object
    const processedLinksFromState = linksFromState.map(link => {
        if (!link.source || !link.target) return link; // Safety check
        const ids = [link.source, link.target].sort();
        const pairKey = `${ids[0]}-${ids[1]}`;
        const groupInfo = linkPairCounts[pairKey];

        if (!groupInfo) return link; // Should not happen if first pass worked

        // Assign index within the group (0, 1, 2...) and total count for this pair
        const linkIndex = groupInfo.current++; // Assign current index, then increment for the next link in this group
        const totalLinksInGroup = groupInfo.count;

        // Return a new link object with the added properties
        return { ...link, linkIndex, totalLinksInGroup };
    });
    // --- **END** Link Pre-processing ---

    // --- Prepare final data for D3's forceSimulation ---
    // Create a map for quick node object lookup
    const nodeMap = new Map(nodesToRender.map(node => [node.id, node]));

    // Map string IDs in links to actual node objects using the nodeMap
    // Use the processed links which now include arc information
    const finalLinksForD3 = processedLinksFromState // <-- Use processed links
        .map(link => ({
            ...link,
            source: nodeMap.get(link.source), // Replace source ID with source node object
            target: nodeMap.get(link.target)  // Replace target ID with target node object
        }))
        .filter(link => link.source && link.target); // Ensure both source and target nodes exist in the current view

    // --- Call Rendering ---
    if (nodesToRender.length > 0 || isBuildingNetwork) { // Render even if building network has 0 nodes initially
        renderGraph(nodesToRender, finalLinksForD3);
    } else {
        // Clear the graph if no nodes match filters and not in build mode
        if (svgRef.current) {
            d3.select(svgRef.current).select('g').remove(); // Remove the main drawing group
            gRef.current = null; // Clear the ref
        }
        if (simulationRef.current) {
            simulationRef.current.stop(); // Stop any lingering simulation
            simulationRef.current = null;
        }
    }

    // Cleanup function for when the component unmounts or dependencies change
    return () => {
        if (simulationRef.current) {
            simulationRef.current.stop();
        }
    };
    // Ensure all relevant state variables and the stable renderGraph function are included
  }, [graphData, selectedNodeType, selectedEdgeType, searchTerm, isBuildingNetwork, visibleNodeIds, renderGraph, lastExpandedNodeId, history, historyIndex]);

  // --- UI Options ---
  // const nodeTypeOptions = [ { value: 'all', label: 'All Node Types' }, { value: 'Organization', label: 'Organization' }, { value: 'Country', label: 'Country' }, { value: 'Location', label: 'Location' }, { value: 'Associated Entity', label: 'Associated Entity' }, { value: 'Sector', label: 'Sector' }, { value: 'Government Body', label: 'Government Body' }, ];
  // const edgeTypeOptions = [ { value: 'all', label: 'All Relationship Types' }, { value: 'OPERATES_AT', label: 'OPERATES_AT' }, { value: 'LOCATED_IN', label: 'LOCATED_IN' }, { value: 'OWNS', label: 'OWNS' }, { value: 'IS_OWNED_BY', label: 'IS_OWNED_BY' }, { value: 'Planned Investment / Strategic Intent', label: 'Planned Investment / Strategic Intent' }, ];

  const nodeTypeOptions = [
    { value: 'all', label: 'All Node Types' },
    { value: 'Organization', label: 'Organization' },
    { value: 'Country', label: 'Country' },
    { value: 'Location', label: 'Location' },
    { value: 'Associated Entity', label: 'Associated Entity' },
    { value: 'Sector', label: 'Sector' },
    { value: 'Government Body', label: 'Government Body' },
];

  const edgeTypeOptions = [
      { value: 'all', label: 'All Relationship Types' },
      // Sorted alphabetically for better UX in the dropdown
      { value: 'BELONGS_TO', label: 'BELONGS_TO' },
      { value: 'Commercial Contract', label: 'Commercial Contract' },
      { value: 'Established Agricultural Land Use', label: 'Established Agricultural Land Use' },
      { value: 'Established Environmental / Carbon Credit Deal', label: 'Established Environmental / Carbon Credit Deal' },
      { value: 'Established Foreign Direct Investment', label: 'Established Foreign Direct Investment' },
      { value: 'Exploratory Trade and Investment Intent', label: 'Exploratory Trade and Investment Intent' },
      { value: 'LOCATED_IN', label: 'LOCATED_IN' },
      { value: 'Memorandum of Understanding (MoU)', label: 'Memorandum of Understanding (MoU)' },
      { value: 'OPERATES_AT', label: 'OPERATES_AT' },
      { value: 'OWNS', label: 'OWNS' },
      { value: 'Ongoing Strategic Energy Investment Programme', label: 'Ongoing Strategic Energy Investment Programme' },
      { value: 'Planned Investment / Strategic Intent', label: 'Planned Investment / Strategic Intent' },
      { value: 'Planned Strategic Investment Programme', label: 'Planned Strategic Investment Programme' },
      { value: 'Signed Bilateral Agreement', label: 'Signed Bilateral Agreement' },
      { value: 'Signed Defence and Security MoUs', label: 'Signed Defence and Security MoUs' },
      { value: 'Signed MoU with Future Collaboration Intent', label: 'Signed MoU with Future Collaboration Intent' },
  ];

  // --- UI Event Handlers ---
  const handleReset = () => {
      setIsBuildingNetwork(false);
      setVisibleNodeIds(new Set());
      setHistory([]);
      setHistoryIndex(-1);
      setSelectedNodeType('all');
      setSelectedEdgeType('all');
      setSearchTerm('');
      setLastExpandedNodeId(null);
      // Reset zoom/pan
      if (svgRef.current && zoomRef.current) {
          d3.select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity);
      }
  };
  const handleExitBuildMode = () => {
      setIsBuildingNetwork(false);
      setVisibleNodeIds(new Set());
      setHistory([]);
      setHistoryIndex(-1);
      setLastExpandedNodeId(null);
      // Optionally reset zoom, or keep current view
      // if (svgRef.current && zoomRef.current) {
      //     d3.select(svgRef.current).transition().duration(750).call(zoomRef.current.transform, d3.zoomIdentity);
      // }
  };
  const handleUndo = () => {
      if (!isBuildingNetwork || historyIndex <= 0) return;
      const newIndex = historyIndex - 1;
      setHistoryIndex(newIndex);
      setVisibleNodeIds(history[newIndex]);
      setLastExpandedNodeId(null); // Clear highlight on undo/redo
  };
  const handleRedo = () => {
      if (!isBuildingNetwork || historyIndex >= history.length - 1) return;
      const newIndex = historyIndex + 1;
      setHistoryIndex(newIndex);
      setVisibleNodeIds(history[newIndex]);
      setLastExpandedNodeId(null); // Clear highlight on undo/redo
  };

  // --- JSX ---
  return (
    <div className="flex flex-col h-screen bg-gray-50">
      {/* Control Panel */}
      <div className="bg-gray-100 p-3 shadow-md z-10 print:hidden">
        <h1 className="text-xl font-semibold mb-3 text-gray-800">Interactive Knowledge Graph: UAE Investments/Operations</h1>

        {/* Mode Indicator & History Controls */}
         {isBuildingNetwork && (
             <div className="mb-2 p-2 bg-blue-100 border border-blue-300 rounded text-sm flex flex-wrap justify-between items-center gap-2">
                 <span className="font-medium text-blue-800">Build Mode ({visibleNodeIds.size} nodes visible). Click nodes to expand network.</span>
                 <div className="flex items-center gap-2">
                     <button
                         className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                         onClick={handleUndo}
                         disabled={historyIndex <= 0}
                         title="Undo last expansion (Ctrl+Z)">
                         Undo
                    </button>
                     <button
                         className="px-2 py-0.5 bg-gray-200 hover:bg-gray-300 rounded text-xs disabled:opacity-50 disabled:cursor-not-allowed"
                         onClick={handleRedo}
                         disabled={historyIndex >= history.length - 1}
                         title="Redo expansion (Ctrl+Y)">
                         Redo
                     </button>
                     <button
                         className="text-blue-700 hover:text-blue-900 text-xs font-medium"
                         onClick={handleExitBuildMode}
                         title="Return to filtered/overview mode">
                         (Exit Build Mode)
                     </button>
                 </div>
             </div>
         )}

        {/* Filters & Search Area - Disabled when in Build Mode */}
        <div className={`flex flex-wrap items-end gap-x-4 gap-y-2 ${isBuildingNetwork ? 'opacity-50 pointer-events-none' : ''}`}>
            <div>
                <label htmlFor="ntf" className="block text-xs font-medium text-gray-600 mb-1">Node Type</label>
                <select
                    id="ntf"
                    className="w-48 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
                    value={selectedNodeType}
                    onChange={e=>setSelectedNodeType(e.target.value)}
                    disabled={isBuildingNetwork}>
                        {nodeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="etf" className="block text-xs font-medium text-gray-600 mb-1">Relationship Type</label>
                <select
                    id="etf"
                    className="w-52 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
                    value={selectedEdgeType}
                    onChange={e=>setSelectedEdgeType(e.target.value)}
                    disabled={isBuildingNetwork}>
                        {edgeTypeOptions.map(o=><option key={o.value} value={o.value}>{o.label}</option>)}
                </select>
            </div>
            <div>
                <label htmlFor="si" className="block text-xs font-medium text-gray-600 mb-1">Search Nodes/Properties</label>
                <input
                    id="si"
                    type="text"
                    className="w-48 p-1.5 border border-gray-300 rounded text-sm focus:ring-blue-500 focus:border-blue-500"
                    value={searchTerm}
                    onChange={e=>setSearchTerm(e.target.value)}
                    placeholder="Name, type, property..."
                    disabled={isBuildingNetwork}/>
            </div>
        </div>

         {/* Action Buttons Area */}
         <div className="mt-3 flex flex-wrap items-end gap-x-4 gap-y-2">
             <button
                 className="bg-red-500 hover:bg-red-600 text-white px-3 py-1.5 rounded text-sm font-medium shadow-sm"
                 onClick={handleReset}
                 title="Reset filters, search, zoom, and exit build mode">
                 Reset All
             </button>
             <button
                 className="bg-gray-200 hover:bg-gray-300 px-3 py-1.5 rounded text-sm shadow-sm"
                 onClick={() => setShowLegend(!showLegend)}>
                 {showLegend ? 'Hide Legend' : 'Show Legend'}
             </button>
         </div>

        {/* Legend - Left Side Vertical Layout */}
        {showLegend && (
            <div className="absolute left-3 top-32 bg-white p-2 rounded border border-gray-200 text-xs shadow-sm z-10 max-w-[220px] max-h-[70vh] overflow-y-auto">
                {/* Node Types - One per row */}
                <div className="mb-2">
                    <div className="font-medium text-gray-600 mb-1 border-b pb-1">Nodes:</div>
                    <div className="flex flex-col gap-y-1">
                        {nodeTypeOptions.filter(o => o.value !== 'all').map(o => (
                            <div key={o.value} className="flex items-center">
                                <div className="w-3 h-3 rounded-full mr-2" style={{ backgroundColor: nodeColorScale[o.value] || '#ccc' }}></div>
                                <span>{o.label}</span>
                            </div>
                        ))}
                    </div>
                </div>
                
                {/* Relationship Types - One per row */}
                <div>
                    <div className="font-medium text-gray-600 mb-1 border-b pb-1 mt-2">Relationships:</div>
                    <div className="flex flex-col gap-y-1">
                        {edgeTypeOptions
                            .filter(o => o.value !== 'all')
                            .map(o => {
                                const s = edgeStyles[o.value] || { stroke: '#bbb', strokeWidth: 1, dasharray: '0' };
                                return (
                                    <div key={o.value} className="flex items-center">
                                        <svg width="20" height="6" className="mr-2 flex-shrink-0">
                                            <line x1="0" y1="3" x2="15" y2="3" stroke={s.stroke} strokeWidth={s.strokeWidth} strokeDasharray={s.dasharray}/>
                                            <polygon points="15,0 20,3 15,6" fill={s.stroke} />
                                        </svg>
                                        <span className="truncate" title={o.label}>{o.label}</span>
                                    </div>
                                );
                            })
                        }
                    </div>
                </div>
                
                {/* Instructions */}
                <div className="text-gray-500 text-[10px] mt-3 pt-1 border-t">
                    {isBuildingNetwork 
                        ? "Build Mode: Click nodes to expand. Drag to reposition." 
                        : "Overview Mode: Click a node to start Build Mode."}
                </div>
            </div>
        )}
      </div>

      {/* Graph Container */}
      <div className="flex-grow border-t border-gray-200 overflow-hidden relative" style={{ position: 'relative' }}>
        <svg ref={svgRef} id="graph-container" className="w-full h-full">
           {/* g element will be appended here by D3 */}
        </svg>

         {/* Loading / Empty State Messages */}
         {/* Message when filters result in no nodes (Overview Mode) */}
         {!isBuildingNetwork && graphData.nodes.length > 0 && renderedNodeCount === 0 && (
             <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
                No nodes match the current filters or search term.
             </div>
         )}
         {/* Message when Build Mode is active but no nodes are visible yet (shouldn't happen often with current logic) */}
         {isBuildingNetwork && visibleNodeIds.size === 0 && historyIndex < 0 && (
              <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
                 Click a node in Overview Mode to start building the network.
              </div>
          )}
          {/* Message while initial data is loading */}
          {graphData.nodes.length === 0 && graphData.links.length === 0 && !isBuildingNetwork && (
               <div className="absolute inset-0 flex items-center justify-center text-gray-500 pointer-events-none">
                   Loading graph data...
               </div>
          )}
      </div>
    </div>
  );
};

export default InteractiveKnowledgeGraph;





