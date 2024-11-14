// Online C++ compiler to run C++ program online
#include <iostream>
#include <queue>
#include <map>
#include <vector>
using namespace std;
using namespace std;

class Node{
    public:
    int value;
    Node* next;
    Node(int value=-1,Node* next = NULL){
        this->value=value;
        this->next=next;
    }
};
class TreeNode{
    public:
    int value;
    TreeNode* left;
    TreeNode* right;
    TreeNode(int val=-1,TreeNode* left=nullptr,TreeNode* right=nullptr){
        this->value=val;
        this->left=left;
        this->right=right;
    }
};

vector<int> topViewTree(TreeNode* root){
    // top view of binary tree
    // bfs with node and val, +1 for right child, -1 for left child;
    if(!root) return {};
    queue<pair<TreeNode*,int>> q;
    map<int,int> m;
    
    q.push({root,0});
    while(!q.empty()){
        TreeNode* cur = q.front().first;
        int dist = q.front().second;
        if(m.find(dist)==m.end()){
            m[dist]=cur->value;
        }
        if(cur->left){
            q.push({cur->left,dist-1});
        }
        if(cur->right){
            q.push({cur->right,dist+1});
        }
        q.pop();
    }
    vector<int> res;
    for(auto i:m){
        res.push_back(i.second);
    }
    return res;
}
int main() {
    // Node* n1 = new Node(1);
    // cout<<n1->value;
    // Node* n2 = new Node(2,n1);
    // cout<<"Next node of n2 is"<<n2->next->value;
    // tree top view test
    TreeNode* root = new TreeNode(1);
    root->left = new TreeNode(2);
    root->right = new TreeNode(3);
    root->left->left = new TreeNode(4);
    root->left->right = new TreeNode(5);
    root->right->right = new TreeNode(6);

    vector<int> topView = topViewTree(root);

    // Print the top view
    cout << "Top view of the binary tree: ";
    for (int val : topView) {
        cout << val << " ";
    }
    return 0;
}