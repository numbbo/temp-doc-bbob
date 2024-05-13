## Function properties


#### Deceptive Functions

All "deceptive" functions provide, beyond their deceptivity, a
"structure" that can be exploited to solve them in a reasonable
procedure.

#### Ill-Conditioning

Ill-conditioning is a typical challenge in real-parameter optimization
and, besides multimodality, probably the most common one. Conditioning
of a function can be rigorously formalized in the case of convex
quadratic functions,
$f({\mathbf{x}}) =\frac12 {\mathbf{x}}^{T} {\mathbf{H}}{\mathbf{x}}$
where ${\mathbf{H}}$ is a symmetric definite positive matrix,
as the condition number of the Hessian matrix ${\mathbf{H}}$.
Since contour lines associated to a convex quadratic function are
ellipsoids, the condition number corresponds to the square root of the
ratio between the largest axis of the ellipsoid and the shortest axis.
For more general functions, conditioning loosely refers to the square of
the ratio between the largest direction and smallest of a contour line.
The testbed contains ill-conditioned functions with a typical
conditioning of $10^6$. We believe this a realistic requirement, while
we have seen practical problems with conditioning as large as $10^{10}$.

#### Regularity

Functions from simple formulas are often highly regular. We have used a
non-linear transformation, $T_\mathrm{\hspace*{-0.01em}osz}$, in order
to introduce small, smooth but clearly visible irregularities.
Furthermore, the testbed contains a few highly irregular functions.

#### Separability

In general, separable functions pose an essentially different search
problem to solve, because the search process can be reduced to
$D$ one-dimensional search procedures. Consequently, non-separable
problems must be considered much more difficult and most benchmark
functions are designed being non-separable. The typical well-established
technique to generate non-separable functions from separable ones is the
application of a rotation matrix $\mathcal{R}$.

#### Symmetry

Stochastic search procedures often rely on Gaussian distributions to
generate new solutions and it has been argued that symmetric benchmark
functions could be in favor of these operators. To avoid a bias in favor
of highly symmetric operators we have used a symmetry breaking
transformation, $T^{{}}_\mathrm{asy}$. We have also included some highly
asymmetric functions.

#### Target function value to reach

The typical target function value for all functions is
${f_\mathrm{opt}}+{10^{-8}}$. On many functions a
value of ${f_\mathrm{opt}}+1$ is not very difficult to reach,
but the difficulty versus function value is not uniform for all
functions. These properties are not intrinsic, that is
${f_\mathrm{opt}}+{10^{-8}}$ is not intrinsically
"very good". The value mainly reflects a scalar multiplier in the
function definition.
:::

[^1]: For our experimental setup see
    [@hansen2009exp; @hansen2016experimental] and for our performance
    assessment methodology see [@hansen2016performance].

[^2]: The implementation provides an instance ID as input, such that a
    set of uniquely specified instances can be explicitly chosen.
