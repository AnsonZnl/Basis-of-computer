function BinarySearchTree(){
    var root = null;
    var Node = function(key){
        this.key = key;
        this.left = null;
        this.right = null;
    }
    // 向树中插入一个新的键
    this.insert = function(key){

    }
    // 搜索键，如果存在返回true，不存在返回false
    this.search = function(key){

    }
    // 通过中序遍历所有节点
    this.inOrderTraverse = function(){

    }
    // 通过先序遍历所有节点
    this.perOrderTraverse = function(){

    }
    // 通过后序遍历所有节点
    this.postOrderTraverse = function(){

    }
    // 返回树中最下的值/键
    this.min = function(){

    }
    // 返回树中最大的值
    this.max = function(){
        
    }
    // 从树中移除某个键
    this.remove = function(key){
        
    }
}


const root = {
    val: "A",
    left: {
      val: "B",
      left: {
        val: "D"
      },
      right: {
        val: "E"
      }
    },
    right: {
      val: "C",
      right: {
        val: "F"
      }
    }
  };

  // 所有遍历函数的入参都是树的根结点对象
function preorder(root) {
    // 递归边界，root 为空
    if(!root) { return }
    // 输出当前遍历的结点值
    console.log('当前遍历的结点值是：', root.val)  
    // 递归遍历左子树 
    preorder(root.left)  
    // 递归遍历右子树  
    preorder(root.right)
}

preorder(root)
