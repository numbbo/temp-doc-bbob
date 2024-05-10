## Symbols and definitions []{#sec:symbols label="sec:symbols"}

Used symbols and definitions of, e.g., auxiliary functions are given in
the following. Vectors are typeset in bold and refer to column vectors.

$\otimes$ :   indicates element-wise multiplication of two
    $D$-dimensional vectors,
    $\otimes:\mathcal{R}^D\times\mathcal{R}^D\to\mathcal{R}^D,
        (\mathbf{x},\mathbf{y})\mapsto\mathrm{{diag}}(\mathbf{x})\times\mathbf{y}=(x_i\times y_i)_{i=1,\dots,D}$

$\|.\|$ :   denotes the Euclidean norm,
    $\|\mathbf{x}\|^2=\sum_i x_i^2$.

$[.]$ :   denotes the nearest integer value

$\mathbf{0}$ :   $=(0,\dots,0)^{\mathrm{T}}$ all zero vector

$\mathbf{1}$ :   $=(1,\dots,1)^{\mathrm{T}}$ all one vector

$\Lambda^{\!\alpha}$ :   is a diagonal matrix in $D$  dimensions with the $i$th diagonal
    element as
    $\lambda_{ii} = \alpha^{\frac{1}{2}\frac{i-1}{D-1}}$

$f^{{}}_\mathrm{pen}$ :   $:\mathcal{R}^D\to\mathcal{R}$,
    $\mathbf{x}\mapsto 100\sum_{i=1}^D\max(0,|x_i| - 5)^2$

$\mathbf{1}_-^+$ :   a $D$-dimensional vector with entries of $-1$ or $1$ both drawn
    equal probability.

$\mathbf{Q}$, $\mathbf{R}$ :   orthogonal (rotation) matrices. For each function instance in each
    dimension a single realization for respectively $\mathbf{Q}$  and
    $\mathbf{R}$  is used. Rotation matrices are generated from standard
    normally distributed entries by Gram-Schmidt orthogonalization.
    Columns and rows of a rotation matrix form an orthogonal basis.

$\mathbf{R}$ :   see $\mathbf{Q}$

$T^{{\beta}_\mathrm{asy}}$ :   $:\mathcal{R}^D\to\mathcal{R}^D$,
    $x_i\mapsto
     \begin{cases}
       x_i^{1+\beta \frac{i-1}{D-1}\sqrt{x_i}} & \text{~if~} x_i>0\\
       x_i                                        & \text{~otherwise~}
     \end{cases}$, for $i=1,\dots,D$.

$T_\mathrm{\hspace*{-0.01em}osz}$ :   $:\mathcal{R}^n\to\mathcal{R}^n$, for any
    positive integer $n$, maps element-wise
    $$x\mapsto\mathrm{{sign}}(x)\exp\left(\hat{x} +
       0.049\left(\sin(c_1 \hat{x}) + \sin(c_2 \hat{x})\right)\right)$$
    with $\hat{x}= \begin{cases}
            \log(|x|) & \text{if~} x\not=0 \\
                    \in\mathcal{R}& \text{otherwise}
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
           \end{cases}$

$\mathbf{x}^\mathrm{opt}$ :   optimal solution vector, such that
    $f(\mathbf{x^\mathrm{opt}})$ is minimal.

## General Setup

### Search Space

All functions are defined and can be evaluated over
$\mathcal{R}^{D}$, while the actual search
domain is given as $[-5,5]^{D}$.

### Location of the optimal $\mathbf{x}^\mathrm{opt}$  and of $f_\mathrm{opt}=f(\mathbf{x^\mathrm{opt}})$

All functions have their global optimum in $[-5,5]^{D}$.
The majority of functions has the global optimum in
$[-4,4]^{D}$. The value for $f_\mathrm{opt}$  is drawn from
a cauchy distributed random variable, with roughly 50% of the values
between -100 and 100. The value is rounded after two decimal places and
the maximum and minimum are set to $1000$ and $-1000$ respectively. In
the function definitions a transformed variable vector
$\mathbf{z}$ is often used instead of the argument
$\mathbf{x}$. The vector $\mathbf{z}$ has its
optimum in
$\mathbf{z^\mathrm{opt}}=\mathbf{0}$, if not
stated otherwise.

### Boundary Handling

On all functions a penalty boundary handling is applied as given with
$f^{{}}_\mathrm{pen}$.

### Linear Transformations

Linear transformations of the search space are applied to derive
non-separable functions from separable ones and to control the
conditioning of the function.

### Non-Linear Transformations and Symmetry Breaking

In order to make relatively simple, but well understood functions less
regular, on some functions non-linear transformations are applied in
$x$- or $f$-space. Both transformations
$T_\mathrm{\hspace*{-0.01emosz}}:\mathcal{R}^n\to\mathcal{R}^n$,
$n\in\{1,D\}$, and
$T^{{}_\mathrm{asy}}:\mathcal{R}^D\to\mathcal{R}^D$
are defined coordinate-wise. They are smooth and have, coordinate-wise, a
strictly positive derivative.
$T_\mathrm{\hspace*{-0.01emosz}}$ is oscillating about the
identity, where the oscillation is scale invariant w.r.t.  the origin.
$T^{{}}_\mathrm{asy}$  is the identity for negative values. When
$T^{{}}_\mathrm{asy}$  is applied, a portion of $1/2^D$ of
the search space remains untransformed.


## Noise Models

In this benchmarking suite three different noise models are used. The
first two, $f_{\mathrm{GN}}\left({}\right)$  and
$f_{\mathrm{UN}}\left({}\right)$, are multiplicative noise models while
the third model, $f_{\mathrm{CN}}\left({}\right)$, is an additive noise
model. All noise models are applied to a function value $f$ under the
assumption that $f\ge0$. All noise models reveal *stochastic dominance*
between any two solutions and are therefore utility-free.

### Gaussian Noise

The Gaussian noise model is scale invariant and defined as
$$f_{\mathrm{GN}\left({f,\beta}\right)} = f\times\exp(\beta\,\mathcal{N}(0,1))\enspace.$$
The noise strength is controlled with $\beta$. The distribution of the
noise is log-normal, thus no negative noise values can be sampled. For
the benchmark functions with moderate noise $\beta = 0.01$, otherwise
$\beta = 1$. For small values of $\beta$ this noise model resembles
$f\times(1+\beta\,\mathcal{N}(0,1))$.

### Uniform Noise

The uniform noise model is introduced as a more severe noise model than
the Gaussian and is defined as $$
  f_{\mathrm{UN}\left({f,\alpha,\beta}\right)} = f\times\mathcal{U}(0,1)^{\beta}\max\left(1, \left(\dfrac{10^9}{f + \epsilon}\right)^{\alpha\,\mathcal{U}(0,1)}\right)\enspace.$$
The noise model uses two random factors. The first factor is in the
interval $[0,1]$, uniformly distributed for $\beta=1$. The second
factor, $\max(\dots)$, is $\ge1$. The parameters $\alpha$ and $\beta$
control the noise strength. For moderate noise
$\alpha = 0.01\left(0.49 + {1}/{D}\right)$ and
$\beta = 0.01$, otherwise $\alpha = 0.49 + {1}/{D}$ and
$\beta = 1$. Furthermore, $\epsilon$ is set to $10^{-99}$ in order to
prevent division by zero.

The uniform noise model is not scale invariant. Due to the last factor
 the noise strength increases with decreasing
(positive) value of $f$. Therefore the noise strength becomes more
severe when approaching the optimum.

### Cauchy Noise

The Cauchy noise model represents a different type of noise with two
important aspects. First, only a comparatively small percentage of
function values is disturbed by noise. Second, the noise distribution is
comparatively "weird". Large outliers occur once in a while, and because
they stem from a continuous distribution they cannot be easily
diagnosed. The Cauchy noise model is defined as
$$f_{\mathrm{CN}\left({f,\alpha,p}\right)} = f + \alpha\,\max\left(0, 1000 + \mathbb{I}_{\left\{\mathcal{U}(0,1) < p\right\}}\dfrac{\mathcal{N}(0,1)}{|\mathcal{N}(0,1)|+\epsilon}\right)\enspace,$$
where $\alpha$ defines the noise strength and $p$ determines the
frequency of the noise disturbance. In the moderate noise case
$\alpha = 0.01$ and $p = 0.05$, otherwise $\alpha = 1$ and $p = 0.2$.
The summand of $1000$ was chosen to sample positive and negative
"outliers" (as the function value is cut from below, see next paragraph)
and $\epsilon$ is set to $10^{-199}$.

### Final Function Value

In order to achieve a convenient testing for the target function value,
in all noise models $1.01\times10^{-8}$ is added to the function value
and, if the input argument $f$ is smaller than $10^{-8}$, the
undisturbed $f$ is returned.

$$f_\mathrm{XX}(f,\dots) \gets \begin{cases}f_\mathrm{XX}(f,\dots) + 1.01\times10^{-8}& \text{if~} f\ge10^{-8}\\
                                 f & \text{otherwise}
\end{cases}$$