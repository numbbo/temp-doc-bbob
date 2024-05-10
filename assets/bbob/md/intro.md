## Introduction

This document is based on the BBOB 2009 function document.
In the following, $24$ noise-free real-parameter single-objective
benchmark functions are presented. Our intention behind the
selection of benchmark functions was to evaluate the performance of
algorithms with regard to typical difficulties which we believe occur in
continuous domain search. We hope that the function collection reflects,
at least to a certain extend and with a few exceptions, a more difficult
portion of the problem distribution that will be seen in practice (easy
functions are evidently of lesser interest).

We prefer benchmark functions that are comprehensible such that
algorithm behaviours can be understood in the topological context. In
this way, a desired search behaviour can be pictured and deficiencies of
algorithms can be profoundly analysed. Last but not least, this can
eventually lead to a systematic improvement of algorithms.

All benchmark functions are scalable with the dimension. Most functions
have no specific value of their optimal solution (they are randomly
shifted in $x$-space). All functions have an artificially chosen optimal
function value (they are randomly shifted in $f$-space). Consequently,
for each function different *instances* can be generated: for each
instance the randomly chosen values are drawn anew. Apart from the
first subgroup, the benchmarks are non-separable. Other specific
properties are discussed in the appendix.

## General Setup

**Search Space:**

All functions are defined and can be evaluated over
$\mathcal{R}^{D}$, while the actual search
domain is given as $[-5,5]^{D}$.

**Location of the optimal $\mathbf{x}^\mathrm{opt}$ and of $f_\mathrm{opt}=f(\mathbf{x^\mathrm{opt}})$:**

All functions have their global optimum in $[-5,5]^{D}$.
The majority of functions has the global optimum in
$[-4,4]^{D}$ and for many of them
$\mathbf{x}^\mathrm{opt}$ is drawn uniformly from this compact. The
value for $f_\mathrm{opt}$ is drawn from a Cauchy distributed random
variable, with zero median and with roughly 50% of the values between
-100 and 100. The value is rounded after two decimal places and set to
$\pm1000$ if its absolute value exceeds $1000$. In the function
definitions a transformed variable vector $\mathbf{z}$ is
often used instead of the argument $\mathbf{x}$. The vector
$\mathbf{z}$ has its optimum in
$\mathbf{z^\mathrm{opt}}=\mathbf{0}$, if not
stated otherwise.

**Boundary Handling:**

On some functions a penalty boundary handling is applied as given with
$f^{{}}_\mathrm{pen}$.

**Linear Transformations:**

Linear transformations of the search space are applied to derive
non-separable functions from separable ones and to control the
conditioning of the function.

**Non-Linear Transformations and Symmetry Breaking:**

In order to make relatively simple, but well understood functions less
regular, on some functions non-linear transformations are applied in
$x$- or $f$-space. Both transformations
$T_\mathrm{\hspace*{-0.01emosz}}:\mathcal{R}^n\to\mathcal{R}^n$,
$n\in\{1,D\}$, and
$T^{{}_\mathrm{asy}}:\mathcal{R}^D\to\mathcal{R}^D$
are defined coordinate-wise (see below). They are smooth and have,
coordinate-wise, a strictly positive derivative. $T_\mathrm{\hspace*{-0.01emosz}}$ is oscillating about the
identity, where the oscillation is scale invariant w.r.t. the origin.
$T^{{}}_\mathrm{asy}$ is the identity for negative values. When
$T^{{}}_\mathrm{asy}$ is applied, a portion of $1/2^D$ of
the search space remains untransformed.

## Symbols and Definitions []{#sec:symbols label="sec:symbols"}

Used symbols and definitions of, e.g., auxiliary functions are given in
the following. Vectors are typeset in bold and refer to column vectors.

$\otimes$    indicates element-wise multiplication of two
    $D$-dimensional vectors,
    $\otimes:\mathcal{R}^D\times\mathcal{R}^D\to\mathcal{R}^D, 
        (\mathbf{x},\mathbf{y})\mapsto\mathrm{{diag}}(\mathbf{x})\times\mathbf{y}=(x_i\times y_i)_{i=1,\dots,D}$

$\|.\|$    denotes the Euclidean norm,
    $\|\mathbf{x}\|^2=\sum_i x_i^2$.

$[.]$    denotes the nearest integer value

$\mathbf{0}$    $=(0,\dots,0)^{\mathrm{T}}$ all zero vector

$\mathbf{1}$    $=(1,\dots,1)^{\mathrm{T}}$ all one vector

$\Lambda^{\!\alpha}$    is a diagonal matrix in $D$ dimensions with the $i$th diagonal
    element as $\lambda_{ii} =
      \alpha^{\frac{1}{2}\frac{i-1}{D-1}}$, for
    $i=1,\dots,D$.

$f^{{}}_\mathrm{pen}$    $:\mathcal{R}^D\to\mathcal{R}$,
    $\mathbf{x}\mapsto\sum_{i=1}^D\max(0,|x_i| - 5)^2$

$\mathbf{1}_-^+$    a $D$-dimensional vector with entries of $-1$ or $1$ with equal
    probability independently drawn.

$\mathbf{Q}$, $\mathbf{R}$    orthogonal (rotation) matrices. For one function in one dimension a
    different realization for respectively $\mathbf{Q}$ and
    $\mathbf{R}$ is used for each instantiation of the function.
    Orthogonal matrices are generated from standard normally distributed
    entries by Gram-Schmidt orthonormalization. Columns and rows of an
    orthogonal matrix form an orthonormal basis.

$\mathbf{R}$    see $\mathbf{Q}$

$T^{{\beta}}_\mathrm{asy}$    $:\mathcal{R}^D\to\mathcal{R}^D$,
    $x_i\mapsto
     \begin{cases}
       x_i^{1+\beta \frac{i-1}{D-1}\sqrt{x_i}} & \text{~if~} x_i>0\\ 
       x_i                                        & \text{~otherwise~}
     \end{cases}$, for $i=1,\dots,D$.

$T_\mathrm{\hspace*{-0.01em}osz}$    $:\mathcal{R}^n\to\mathcal{R}^n$, for any
    positive integer $n$ ($n=1$ and $n=D$ are used in the
    following), maps element-wise
    $$x\mapsto\mathrm{{sign}}(x)\exp\left(\hat{x} +
       0.049\left(\sin(c_1 \hat{x}) + \sin(c_2 \hat{x})\right)\right)$$
    with $\hat{x}= \begin{cases}
    		\log(|x|) & \text{if~} x\not=0 \\
                    0 & \text{otherwise}
    		\end{cases}$,
    $\mathrm{{sign}}(x) = \begin{cases} -1 & \text{if~} x < 0 \\ 
                                0 & \text{if~} x = 0 \\ 
                                1 & \text{otherwise} 
                 \end{cases}$, $c_1 = \begin{cases}
           10 & \text{if~} x > 0\\
           5.5 & \text{otherwise}
           \end{cases}$ and $c_2 = \begin{cases}
           7.9 & \text{if~} x > 0\\
           3.1 & \text{otherwise}
           \end{cases}$.

$\mathbf{x}^\mathrm{opt}$    optimal solution vector, such that
    $f(\mathbf{x^\mathrm{opt}})$ is minimal.
