/**
 * Wraps every <table> in a scrollable container so wide research tables
 * never force horizontal scrolling on the whole page (brief §5, §10).
 * Written inline to avoid pulling in another dependency.
 */
export default function rehypeTableWrap() {
  return (tree) => {
    const walk = (node, parent, index) => {
      if (!node || typeof node !== 'object') return;
      if (node.tagName === 'table' && parent && !(parent.properties?.className || []).includes('table-wrap')) {
        parent.children[index] = {
          type: 'element',
          tagName: 'div',
          properties: { className: ['table-wrap'], tabindex: '0', role: 'region' },
          children: [node],
        };
        return;
      }
      if (Array.isArray(node.children)) {
        for (let i = node.children.length - 1; i >= 0; i--) walk(node.children[i], node, i);
      }
    };
    walk(tree, null, 0);
  };
}
