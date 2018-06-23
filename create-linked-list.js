var node {
   this.next: null,
   this.data: null,
   setData: function(d) {
     data = d;
   }

function appendToTail(d) {
     var newNode = node.setData(d)
     end = newNode
     Node n = this;

     while (n.next != null) {
        n = n.next;
      }
      n.next = end;
}
