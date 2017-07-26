type Stack = [Char]

isBalanced :: String -> Bool
isBalanced line = isBalanced' line []

isBalanced' :: String -> Stack -> Bool
isBalanced' "" [] = True
isBalanced' ('{':line) stack = isBalanced' line ('{':stack)
isBalanced' ('(':line) stack = isBalanced' line ('(':stack)
isBalanced' ('[':line) stack = isBalanced' line ('[':stack)
isBalanced' ('}':line) ('{':stack) = isBalanced' line stack
isBalanced' (')':line) ('(':stack) = isBalanced' line stack
isBalanced' (']':line) ('[':stack) = isBalanced' line stack
isBalanced' _ _ = False

respondBalanced :: String -> String
respondBalanced line = if isBalanced line
                       then "YES"
                       else "NO"

main :: IO ()
main = interact $ unlines . map respondBalanced . drop 1 . lines