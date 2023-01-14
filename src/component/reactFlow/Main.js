import { useState, useCallback } from 'react';
import ReactFlow, { Background, Controls, MiniMap, applyEdgeChanges, applyNodeChanges, addEdge, } from 'reactflow';
import 'reactflow/dist/style.css';

const Main = () => {
    const initialNodes = [
        {
            id: '1',
            position: { x: 0, y: 0 },
            data: { label: 'Hello' },
            type: 'input',
        },
        {
            id: '2',
            position: { x: 100, y: 100 },
            data: { label: 'World' },
        },
        {
            id: '3',
            position: { x: -100, y: 100 },
            data: { label: 'World' },
        },
    ];
    const initialEdges = [{ id: '1-2', source: '1', target: '2' }];
    const [nodes, setNodes] = useState(initialNodes);
    const [edges, setEdges] = useState(initialEdges);
    const onNodesChange = useCallback((changes) => setNodes((nds) => applyNodeChanges(changes, nds)), []);
    const onEdgesChange = useCallback((changes) => setEdges((eds) => applyEdgeChanges(changes, eds)), []);
    const onConnect = useCallback((params) => setEdges((eds) => addEdge(params, eds)), []);
    const connectionLineStyle = { stroke: 'white' };

    const edgeOptions = {
        animated: true,
        style: {
            stroke: 'white',
        },
    };
    return (
        <div style={{ height: '100vh' }}>
            <div className="box"></div>
            <ReactFlow
                nodes={nodes}
                onNodesChange={onNodesChange}
                edges={edges}
                onEdgesChange={onEdgesChange}
                onConnect={onConnect}
                defaultEdgeOptions={edgeOptions}
                fitView
                style={{
                    backgroundColor: '#D3D2E5',
                }}
                connectionLineStyle={connectionLineStyle}
            >
                <Background />
                <Controls />
                <MiniMap style={{ border: '1px solid black' }} />
            </ReactFlow>
        </div>
    )
}

export default Main