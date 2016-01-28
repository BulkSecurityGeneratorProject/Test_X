(define (factorial n)
  (if (< n 3)
    n
    (+ (factorial (- n 1)) (* 2 (factorial (- n 2))) (* 3 (factorial (- n 3))))))
