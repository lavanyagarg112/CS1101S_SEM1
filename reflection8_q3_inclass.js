function curry(f) {
    return x => y => f(x, y);
}

const curried_pow = curry(math_pow);
(curried_pow(3))(4);
