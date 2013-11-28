
fac :: Integer -> Integer
fac 0 = 1
fac n = n * fac (n-1)



p :: Integer -> Integer -> Integer
p n m = (fac n) `div` (fac (n - m))



c :: Integer -> Integer -> Integer
c n m = (fac n) `div` (fac (n - m) * fac m)




{-   二項式展開   -}

bin :: Integer -> [Integer]
bin n = map(\x ->  c n x) [0..n]



biN :: Integer -> [[Integer]]
biN n = map (\x -> bin x)[0..n]