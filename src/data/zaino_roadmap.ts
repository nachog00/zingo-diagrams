import type { Node, Edge } from "@xyflow/react";

// const COLS = 6;
// const ROWS = 4;

type Milestone = {
  id: 1 | 2 | 3;
  title: string;
  items: string[];
};

const milestones: Milestone[] = [
  {
    id: 1,
    title: "Milestone 1",
    items: [
      "Outline Indexer design",
      "Implement legacy functionality in rust for backwards compatibility",
      "Convert Indexer to use zebra’s primitives",
      "Solve nym dependency conflict",
    ],
  },
  {
    id: 2,
    title: "Milestone 2",
    items: [
      "Interface directly with Zebra’s ReadStateService",
      "Implement internal mempool representation",
      "Create internal compact block cache",
      "Update lightwallet service to use ReadStateService",
    ],
  },
  {
    id: 3,
    title: "Milestone 3",
    items: [
      "Implement remote access to ReadStateService *(or IndexerStateService) for full node wallets",
      "Implement remaining new functionality required by the indexer service.",
      "Zebrad Regtest testing",
      "Cli Wallet development",
    ],
  },
];

type ZainoRoadmapDataItem = {
  id: [Milestone["id"], number];
  index: [number, number];
  description: string;
  gh_issue_url?: string;
};

const items: ZainoRoadmapDataItem[] = [
    {
        id: [1, 1],
        description: 'Solve dependency conflict between zebra and the nym-sdk.',
        index: [0, 0],
    },
    {
        id: [1, 2],
        description: 'Explicitly mark and broadcast list of lightwallet gRPCs to be deprecated.',
        index: [0, 1],
    },
    {
        id: [1, 3],
        description: 'Convert Indexer service to use zebra’s primitives.',
        index: [1, 0],
    },
    {
        id: [1, 4],
        description: 'Implement test framework showing equivalence between legacy and new implementation.',
        index: [1, 1],
    },
    {
        id: [1, 5],
        description: 'Implement lightwalletd gRPC functionality in Rust using JSONRPC interface for backwards compatibility.',
        index: [1, 2],
    },
    {
        id: [1, 6],
        description: 'Outline of the Indexer design, contextualized by implementation.',
        index: [1, 3],
    },
    {
        id: [2, 1],
        description: 'Provide interface to ReadStateService from Zebrad.',
        index: [2, 0],
    },
    {
        id: [2, 2],
        description: 'Help with the design of nullifier and outpoint spend detection maps.',
        index: [2, 1],
    },
    {
        id: [2, 3],
        description: 'Create an internal CompactBlockCache RocksDB.*Possibly served directly by Zebra.',
        index: [3, 0],
    },
    {
        id: [2, 4],
        description: 'Provide interface to provide internal representation of mempool from Zebrad - IndexerMempool.',
        index: [3, 1],
    },
    {
        id: [2, 5],
        description: 'Implement lightwallet service using ReadStateService instead of the JSONRPC interface.',
        index: [4, 0],
    },
    {
        id: [2, 6],
        description: 'Leverage implementation to contextuilize and finalize full architecture of Indexer.',
        index: [4, 3],
    },
    {
        id: [3, 1],
        description: 'Implement service to allow remote access to ReadStateService.',
        index: [5, 0],
    },
    {
        id: [3, 2],
        description: 'Use our experience with zingolib and zingo-cli to help with the development of zcash’s new cli wallet.',
        index: [5, 1],
    },
    {
        id: [3, 3],
        description: 'Cover Zebrads regtest mode with out full test suite and document all revelant issues.',
        index: [5, 2],
    },
    {
        id: [3, 4],
        description: 'Unpredicted but necessary functionality, emergent from milestone 2 architecture.',
        index: [5, 3],
    }

];

export type ZainoRoadmapNode = Node<{
    id: string;
    description: string;
    gh_issue_url?: string;
}>;

const nodes : ZainoRoadmapNode[] = items.map(getNodeFromDataItem);

function getNodeFromDataItem(item: ZainoRoadmapDataItem): ZainoRoadmapNode {
    const [milestoneId, index] = item.id;
    const milestone = milestones.find((milestone) => milestone.id === milestoneId);
    const title = milestone?.items[index];
    const [x, y] = item.index;
    const id = item.id.join('.');
    return {
        id: id,
        position: { x: x * 180, y: y * 100 },
        data: {
            id: id,
            description: item.description,
            gh_issue_url: item.gh_issue_url,
        },
    };
}

export type ZainoRoadmapEdge = Edge

const edges: ZainoRoadmapEdge[] = [
    {
        source: '1.1',
        target: '1.2',
        id: '1.1-1.2',
    },
]

export { nodes, edges };
