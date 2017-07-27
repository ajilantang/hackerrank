
import sys
from heapq import heappush, heappop, _heappop_max, _siftdown_max

def _heappush_max(heap, item):
    heap.append(item)
    _siftdown_max(heap, 0, len(heap)-1)
    
def addItem(number, lowerHalf, higherHalf):
    if(len(lowerHalf) == 0 or number < lowerHalf[0]):
        _heappush_max(lowerHalf, number)
    else:
        heappush(higherHalf, number)
    
def rebalance(lowerHalf, higherHalf):
    if(abs(len(lowerHalf) - len(higherHalf)) >= 2):
        if(len(lowerHalf) < len(higherHalf)):
            _heappush_max(lowerHalf, heappop(higherHalf))
        else:
            heappush(higherHalf, _heappop_max(lowerHalf))
            
def getMedian(lowerHalf, higherHalf):
    if len(lowerHalf) == len(higherHalf):
        return (lowerHalf[0] + higherHalf[0]) / 2
    elif len(lowerHalf) > len(higherHalf):
        return lowerHalf[0]
    else:
        return higherHalf[0]
        
def getMedians(items):
    lowerHalf = []
    higherHalf = []
    medians = []
    
    for each in items:
        addItem(each, lowerHalf, higherHalf)
        rebalance(lowerHalf, higherHalf)
        medians.append(getMedian(lowerHalf, higherHalf))
        
    return medians
        
n = int(input().strip())
items = []
for each in range(n):
    each = int(input().strip())
    items.append(each)
    
for each in getMedians(items):
    print('{0:.1f}'.format(each))