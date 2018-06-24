function solution(T) {
    // write your code in JavaScript (Node.js 8.9.4)
        var size=-1
         function inOrder(node){

            if (node){

                if(node.l && node.r){
                    size = size+2
                }

                //traverse the left subtree
                if (node.l !== null){
                    inOrder(node.l);
                }


                //traverse the right subtree
                if (node.r !== null){
                    inOrder(node.r);
                }
            }

        }

        inOrder(T)

        return size;
}
