function BinarySearchTree() {
  var root = null;
  var Node = function (key) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
  // 向树中插入一个新的键
  this.insert = function (key) {
    var newNode = new Node(key)
    if (root === null) { // 判断是否是第一个插入的节点
      root = newNode
    } else {
      insertNode(root, newNode)
    }

    function insertNode(node, newNode) {
      if (newNode.key < node.key) {
        // 对比新点的key是否小于root的key
        if (node.left === null) {
          node.left = newNode; // 插入左节点
        } else {
          // 回调执行下一个节点，继续判断
          insertNode(node.left, newNode)
        }
      } else {
        if (node.right === null) {
          node.right = newNode; // 插入右节点
        } else {
          // 回调执行下一个节点，继续判断
          insertNode(node.right, newNode)
        }
      }
    }
  }
  // 搜索键，如果存在返回true，不存在返回false
  this.search = function (key) {
    return searchNode(root, key)

    function searchNode(node, key) {
      if (node === null) {
        return false
      }
      if (key < node.key) {
        return searchNode(node.left, key)
      } else if (key > node.key) {
        return searchNode(node.right, key)
      } else {
        // 找到了，不大于不小于就是等于==
        return true
      }
    }
  }
  // 通过中序遍历所有节点
  this.inOrderTraverse = function (callback) {
    // 从左到右遍历，从最小到最大，顺序是，左>根>右
    inOrderTraverseNode(root, callback)

    function inOrderTraverseNode(node, callback) {
      if (node !== null) {
        inOrderTraverseNode(node.left, callback); // 左
        callback(node.key); // 回调
        inOrderTraverseNode(node.right, callback) // 右
      }
    }
  }
  // 通过先序遍历所有节点
  this.perOrderTraverse = function (callback) {
    // 根>左>右
    perOrderTraverseNode(root, callback)

    function perOrderTraverseNode(root, allback) {
      if (node !== null) {
        callback(node)
        perOrderTraverseNode(node.left, callback)
        perOrderTraverseNode(node.right, callback)
      }
    }
  }
  // 通过后序遍历所有节点
  this.postOrderTraverse = function () {
    // 左>右>根
    postOrderTraverseNode(root, callback);

    function postOrderTraverseNode(node, callback) {
      if (node !== null) {
        postOrderTraverseNode(node.left, callback);
        postOrderTraverseNode(node.right, callback);
        callback(node.key)
      }
    }
  }
  // 返回树中最小的值/键
  this.min = function () {
    var node = root
    if (node) {
      while (node && node.left !== null) {
        //一直循环到不符合条件为止
        node = node.left
      }
      return node.key
    } else {
      return null
    }
  }
  // 返回树中最大的值
  this.max = function () {
    var node = root
    if (node) {
      while (node && node.right !== null) {
        //一直循环到不符合条件为止
        node = node.right
      }
      return node.key
    } else {
      return null
    }
  }
  // 从树中移除某个键
  this.remove = function (key) {
    root = removeNode(root, key);
    function removeNode(node, key) {
      if (node === null) {
        return null
      }
      if (key < node.key) {
        node.left = removeNode(node.left, key)
        return node;
      } else if (key > node.key) {
        node.right = removeNode(node.right, key)
        return node
      } else { // 键等于node.key
        // 第一种情况，一个子叶点
        if (node.left == null && node.right === null) {
          node = null;
          return node;
        }
        // 第二种情况，一个只有一个子节点的节点
        if (node.left === null) {
          // 只有一个右节点
          node = node.right;
          return node
        } else if (node.right === null) {
          // 只有一个左节点
          node = node.left
          return node
        }
        // 第三种情况，一个只有两个子节点的节点
        var aux = findMinNode(node.right)
        node.key = aux.key;
        node.right = removeNode(node.right, aux.key);
        return node;
      }
    }
  }
}


// const root = {
//     val: "A",
//     left: {
//       val: "B",
//       left: {
//         val: "D"
//       },
//       right: {
//         val: "E"
//       }
//     },
//     right: {
//       val: "C",
//       right: {
//         val: "F"
//       }
//     }
//   };

//   // 所有遍历函数的入参都是树的根结点对象
// function preorder(root) {
//     // 递归边界，root 为空
//     if(!root) { return }
//     // 输出当前遍历的结点值
//     console.log('当前遍历的结点值是：', root.val)  
//     // 递归遍历左子树 
//     preorder(root.left)  
//     // 递归遍历右子树  
//     preorder(root.right)
// }

// preorder(root)