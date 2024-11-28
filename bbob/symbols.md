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

$\Lambda^{\!\alpha}$    is a diagonal matrix in $D$ dimensions with the $i$th diagonal
    element as $\lambda_{ii} =
      \alpha^{\frac{1}{2}\frac{i-1}{D-1}}$, for
    $i=1,\dots,D$.

$f^{{}}_\mathrm{pen}$    $:\mathcal{R}^D\to\mathcal{R}$,
    $\mathbf{x}\mapsto\sum_{i=1}^D\max(0,|x_i| - 5)^2$

$\mathbf{1}_-^+$    a $D$-dimensional vector with entries of $-1$ or $1$ with equal
    probability independently drawn.

$\mathbf{Q}$, $\mathbf{R}$    orthogonal (rotation) matrices. For one function in one dimension a
    different realization for respectively $\mathbf{Q}$ and
    $\mathbf{R}$ is used for each instantiation of the function.
    Orthogonal matrices are generated from standard normally distributed
    entries by Gram-Schmidt orthonormalization. Columns and rows of an
    orthogonal matrix form an orthonormal basis.

$\mathbf{R}$    see $\mathbf{Q}$

$T^{{\beta}}_\mathrm{asy}$    $:\mathcal{R}^D\to\mathcal{R}^D$,
    $x_i\mapsto
     \begin{cases}
       x_i^{1+\beta \frac{i-1}{D-1}\sqrt{x_i}} & \text{~if~} x_i>0\\ 
       x_i                                        & \text{~otherwise~}
     \end{cases}$, for $i=1,\dots,D$. See [Figure 1](/bbob/overview.qmd#fig-bbob-trans).

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
           \end{cases}$. See [Figure 1](/bbob/overview.qmd#fig-bbob-trans).

$\mathbf{x}^\mathrm{opt}$    optimal solution vector, such that
    $f(\mathbf{x^\mathrm{opt}})$ is minimal.
