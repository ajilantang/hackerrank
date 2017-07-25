"""
Detect a cycle in a linked list. Note that the head pointer may be 'None' if the list is empty.

A Node is defined as: 
 
    class Node(object):
        def __init__(self, data = None, next_node = None):
            self.data = data
            self.next = next_node
"""


def has_cycle(head):
    pointer = head
    if not pointer.next:
        return False
    while pointer.next:
        if pointer.next is pointer:
            return True
        pointer = pointer.next
    return False
    pass