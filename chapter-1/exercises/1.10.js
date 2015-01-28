function A(x,y) {
   if (y === 0) 
        return 0;
   else if (x === 0) 
        return 2 * y;
   else if (y === 1)
        return 2;
   else return A(x - 1, A(x, y - 1));
}


||	PART1	||
------------
A(1,10)
A(0, A(1, 9))
		 A(0, A(1,8))
					A(0, A(1,7))
							 A(0, A(1,6))
										A(0, A(1,5))
												 A(0, A(1,4))
															A(0, A(1,3))
																	 A(0, A(1,2))
																				A(0, A(1,1))
																				A(0,2)
																	 A(0, 4)
															A(0, 8)
											   A(0, 16)
										A(0, 32)
							 A(0, 64)
					A(0, 128)
		 A(0, 256)
A(0, 512)
1024

result = 1024
--------------------


A(2,4)														
A(1, A(2,3))
		 A(1, A(2,2))
					A(1, A(2,1))
					A(1, 2)
					A(0, A(1,1))
		 			A(0, 2)
		 A(1, 4)
		 A(0, A(1,3))
					A(0, A(1,2))
							 A(0, A(1,1))
							 A(0, 2)
					A(0, 4)
		 A(0, 8)
A(1, 16)
A(0, )
		 		... A(0, A(1,1))
A(0, 32768)
65536

result = 65536
--------------------


A(3,3)
A(2, A(3,2))
		 A(2, A(3,1))
		 A(2, 2)
		 A(1, A(2,1))
		 A(1, 2)
		 A(0, A(1,1))
		 A(0, 2)
A(2, 4)
A(1, A(2,3))
		 A(1, A(2, 2))
					A(1, A(2,1))
					A(1, 2)
		 			A(0, A(1,1))
				  A(0, 2)
		 A(1, 4)
		 ...
		 A(0, 8)
A(1, 16)
A(0, A(0, 15))
...
A(0, 32768)
65536

result = 65536
---------------



||	PART2	||
------------

function f(n) {
   return A(0,n);
}
function g(n) {
   return A(1,n);
}
function h(n) {
   return A(2,n);
}
function k(n) {
   return 5 * n * n;
}


f(n) => 2*n
g(n) => 2^n
h(n) => 
k(4) => 5n*2
