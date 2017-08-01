`/* Hidden stub code will pass a root argument to the function below. Complete the function to solve the challenge. Hint: you may want to write one or more helper functions.  

The Node class is defined as follows:
    class Node {
        int data;
        Node left;
        Node right;
     }
*/
    boolean checkBST(Node root) {
     ArrayList<Integer> list = new ArrayList<>();
       boolean flag = false;
       helper(root,list);
       for(int i=0;i<list.size()-1;i++){
           if(list.get(i)>=list.get(i+1)){
               flag = false;
               break;
           }else{
               flag = true;
           }
       }
        return flag;
    }

   public static void helper(Node root, ArrayList<Integer> temp){
       if(root!=null){
           helper(root.left,temp);
           temp.add(root.data);
           helper(root.right,temp);
       }
    }