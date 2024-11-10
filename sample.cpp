// Online C++ compiler to run C++ program online
#include <iostream>
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

int main() {
    Node* n1 = new Node(1);
    cout<<n1->value;
    Node* n2 = new Node(2,n1);
    cout<<"Next node of n2 is"<<n2->next->value;
    return 0;
}