let tree = {
  value: 0,
  children: [
    {
      value: 11,
      children: [
        {
          value: 21,
          children: [
            {
              value: 31,
              children: [],
            },
            {
              value: 32,
              children: [],
            },
            {
              value: 33,
              children: [],
            },
          ],
        },
        {
          value: 22,
          children: [],
        },
      ],
    },
    {
      value: 12,
      children: [
        {
          value: 23,
          children: [],
        },
        {
          value: 24,
          children: [],
        },
      ],
    },
    {
      value: 13,
      children: [],
    },
  ],
};

function recursiveTraverse(node, action) {
  if (!node || !node.children) {
    return;
  }
  action(node.value);
  node.children.forEach(function (item, index) {
    recursiveTraverse(item, action);
  });
}

recursiveTraverse(tree, console.log);
