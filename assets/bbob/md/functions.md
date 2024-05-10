<div id="text-g1">
## Separable functions
</div>

<div id="text-f1">
### f<sub>1</sub>: Sphere function {#f1}

$$f_{1}(\mathbf{x}) = \|\mathbf{z}\|^2 + f_\mathrm{opt}$$

-   $\mathbf{z}= \mathbf{x}- \mathbf{x^\mathrm{opt}}$

**Properties:**

Presumably the most easy continuous domain search problem, given the
volume of the searched solution is small (i.e. where pure monte-carlo
random search is too expensive).

-   unimodal

-   highly symmetric, in particular rotationally invariant, scale
    invariant

**Information gained from this function:**

-   What is the optimal convergence rate of an algorithm?
</div>

<div id="text-f2">
### f<sub>2</sub>: Ellipsoidal function {#f2}

$$f_{2}(\mathbf{x}) = \sum_{i = 1}^{D} 10^{6\frac{i-1}{D-1}}\,z_i^2 + f_\mathrm{opt}\\$$

-   $\mathbf{z}= T_\mathrm{\hspace*{-0.01emosz}}(\mathbf{x}- \mathbf{x^\mathrm{opt}})$

**Properties:**

Globally quadratic and ill-conditioned function with smooth local
irregularities.

-   unimodal

-   conditioning is about $10^6$

**Information gained from this function:**

-   In comparison to f<sub>10</sub>: Is separability exploited?
</div>
<div id="text-f3">
### f<sub>3</sub>: Rastrigin function {#f3}

$$f_{3}(\mathbf{x}) = 10 \left(D- \sum_{i = 1}^{D}\cos(2\pi z_i)\right) + \|\mathbf{z}\|^2 + f_\mathrm{opt}$$

-   $\mathbf{z}= \Lambda^{\!10}T^{{0.2}}_{\mathrm{asy}}(T_\mathrm{\hspace*{-0.01emosz}}(\mathbf{x}-\mathbf{x^\mathrm{opt}}))$

**Properties:**

Highly multimodal function with a comparatively regular structure for
the placement of the optima. The transformations
$T^{{}}_\mathrm{asy}$ and $T_\mathrm{\hspace*{-0.01em}osz}$ alleviate
the symmetry and regularity of the original Rastrigin function

-   roughly $10^D$ local optima

-   conditioning is about $10$

**Information gained from this function:**

-   In comparison to f<sub>15</sub>: Is separability exploited?
</div>
<div id="text-f4">
### f<sub>4</sub>: Büche-Rastrigin function {#f4}

$$f_{4}(\mathbf{x}) = 10 \left(D- \sum_{i = 1}^{D}\cos(2\pi z_i)\right) + 
             \sum_{i = 1}^{D}z_i^2 + 100\,f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$

-   $z_i = s_i\,T_\mathrm{\hspace*{-0.01emosz}}(x_i - x_i^\mathrm{opt}) \quad \text{for} \; i = 1 
            \ldots D$

-   $s_i = \begin{cases}
    	      10\times10^{\frac{1}{2}\,\frac{i-1}{D-1}} & 
           \text{~if~} z_i>0 \text{~and~} i = 1,3,5,\ldots 
             \\ 
             10^{\frac{1}{2}\frac{i-1}{D-1}} & \text{~otherwise~}
      \end{cases}$ for $i= 1,\dots,D$

**Properties:**

Highly multimodal function with a structured but highly asymmetric
placement of the optima. Constructed as a deceptive function for
symmetrically distributed search operators.

-   roughly $10^D$ local optima, conditioning is about
    $10$, skew factor is about $10$ in $x$-space and $100$ in $f$-space

**Information gained from this function:**

-   In comparison to f<sub>3</sub>: What is the effect of asymmetry?
</div>
<div id="text-f5">
### f<sub>5</sub>: Linear slope {#f5}

$$f_{5}(\mathbf{x}) = \sum_{i = 1}^{D} 5\,|s_i| - s_i z_i  
   + f_\mathrm{opt}$$

-   $z_i = x_i$ if $x_i^\mathrm{opt}x_i < 5^2$ and
    $z_i = x_i^\mathrm{opt}$ otherwise, for
    $i=1,\dots,D$. That is, if $x_i$ exceeds
    $x_i^\mathrm{opt}$ it will mapped back into the domain
    and the function appears to be constant in this direction.

-   $s_i = \mathrm{{sign}}\left(x_i^\mathrm{opt}\right)\, 10^{\frac{i-1}{D-1}}$
    for $i=1,\dots,D$.

-   $\mathbf{x^\mathrm{opt}}= \mathbf{z^\mathrm{opt}}= 5\times\mathbf{1_-^+}$

**Properties:**

Purely linear function testing whether the search can go outside the
initial convex hull of solutions right into the domain boundary.

-   $\mathbf{x}^\mathrm{opt}$ is on the domain boundary

**Information gained from this function:**

-   Can the search go outside the initial convex hull of solutions into
    the domain boundary? Can the step size be increased accordingly?
</div>

<div id="text-g2">
## Functions with low or moderate conditioning
</div>

<div id="text-f6">
### f<sub>6</sub>: Attractive sector function {#f6}

$$f_{6}(\mathbf{x}) = T_\mathrm{\hspace*{-0.01emosz}}\left(\sum_{i = 1}^{D} (s_i z_i)^2\right)^{0.9} + f_\mathrm{opt}$$

-   $\mathbf{z}= \mathbf{Q}\Lambda^{\!10}\mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}})$

-   $s_i = \begin{cases}
    	      10^2& \text{if~} z_i\times x_i^\mathrm{opt}> 0\\
    	      1 & \text{otherwise}
    	      \end{cases}$

**Properties:**

Highly asymmetric function, where only one "hypercone" (with angular
base area) with a volume of roughly ${1}/{2^D}$ yields low
function values. The optimum is located at the tip of this cone.

-   unimodal

**Information gained from this function:**

-   In comparison to f<sub>1</sub>: What is the effect of a highly asymmetric
    landscape?
</div>
<div id="text-f7">
### f<sub>7</sub>: Step ellipsoidal function {#f7}

$$f_{7}(\mathbf{x}) = 0.1 \max\left(|\hat{z}_1|/10^4,\, \sum_{i = 1}^{D} 
                         10^{2\frac{i-1}{D-1}} z_i^2\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$

-   $\hat{\mathbf{z}} = \Lambda^{\!10}\mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}})$

-   $\hat{z_i} = \begin{cases} \lfloor0.5+\hat{z}_i\rfloor &  \text{if~} \left|\hat{z}_i\right| > 0.5 \\ {\lfloor0.5+10\,\hat{z}_i\rfloor}/{10} & \text{otherwise} \end{cases}$ for $i=1,\dots,D$,\
    denotes the rounding procedure in order to produce the plateaus.

-   $\mathbf{z}= \mathbf{Q}\tilde{\mathbf{z}}$

**Properties:**

The function consists of many plateaus of different sizes. Apart from a
small area close to the global optimum, the gradient is zero almost
everywhere.

-   unimodal, non-separable, conditioning is about $100$

**Information gained from this function:**

-   Does the search get stuck on plateaus?
</div>
<div id="text-f8">
### f<sub>8</sub>: Rosenbrock function, original {#f8}

$$f_{8}(\mathbf{x}) = \sum_{i = 1}^{D-1} \left( 100\,\left(z_i^2 - z_{i+1}\right)^2 + (z_i-1)^2 \right) + f_\mathrm{opt}$$

-   $\mathbf{z}= \max\!\left(1,\frac{\sqrt{D}}{8}\right)(\mathbf{x}- \mathbf{x^\mathrm{opt}}) + 1$

-   $\mathbf{z^\mathrm{opt}}=\mathbf{1}$

**Properties:**

So-called banana function due to its 2-D contour lines as a bent ridge
(or valley). In the beginning, the prominent
first term of the function definition attracts to the point
$\mathbf{z}=\mathbf{0}$. Then, a long bending
valley needs to be followed to reach the global optimum. The ridge
changes its orientation $D-1$ times. Exceptionally, here
$\mathbf{x^\mathrm{opt}}\in[-3,3]^D$.

-   tri-band dependency structure, in larger dimensions the function has
    a local optimum with an attraction volume of about 25%

**Information gained from this function:**

-   Can the search follow a long path with $D-1$ changes in
    the direction?
</div>
<div id="text-f9">
### f<sub>9</sub>: Rosenbrock function, rotated {#f9}

$$f_{9}(\mathbf{x}) = \sum_{i = 1}^{D-1} \left( 100\,\left(z_i^2 - z_{i+1}\right)^2 + (z_i-1)^2 \right) + f_\mathrm{opt}$$

-   $\mathbf{z}= \max\left(1,\frac{\sqrt{D}}{8}\right)\mathbf{R}\mathbf{x}+ \mathbf{1}/2$

-   $\mathbf{z^\mathrm{opt}}=\mathbf{1}$

**Properties:**

rotated version of the previously defined Rosenbrock function.

**Information gained from this function:**

-   In comparison to f<sub>8</sub>: Can the search follow a long path with
    $D-1$ changes in the direction without exploiting
    partial separability?
</div>

<div id="text-g3">
## Functions with high conditioning and unimodal
</div>

<div id="text-f10">
### f<sub>10</sub>: Ellipsoidal function {#f10}

$$f_{10}(\mathbf{x}) = \sum_{i = 1}^{D} 10^{6\frac{i-1}{D-1}}z_i^2 + f_\mathrm{opt}$$

-   $\mathbf{z}= T_\mathrm{\hspace*{-0.01emosz}}(\mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}}))$

**Properties:**

Globally quadratic ill-conditioned function with smooth local
irregularities, non-separable counterpart to $f_2$.

-   unimodal, conditioning is $10^6$

**Information gained from this function:**

-   In comparison to f<sub>2</sub>: What is the effect of rotation
    (non-separability)?

</div>
<div id="text-f11">
### f<sub>11</sub>: Discus function {#f11}

$$f_{11}(\mathbf{x}) = 10^6 z_1^2 + \sum_{i = 2}^{D} z_i^2 + f_\mathrm{opt}$$

-   $\mathbf{z}= T_\mathrm{\hspace*{-0.01emosz}}(\mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}}))$

**Properties:**

Globally quadratic function with local irregularities. A single
direction in search space is a thousand times more sensitive than all
others.

-   conditioning is about $10^6$

**Information gained from this function:**

-   In comparison to f<sub>1</sub>: What is the effect of constraint-like
    penalization?

</div>
<div id="text-f12">
### f<sub>12</sub>: Bent cigar function {#f12}

$$f_{12}(\mathbf{x}) = z_1^2 + 10^6\sum_{i = 2}^{D} z_i^2 + f_\mathrm{opt}$$

-   $\mathbf{z}= \mathbf{R}\,T^{{0.5}}_\mathrm{asy}(\mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}}))$

**Properties:**

A ridge defined as $\sum_{i=2}^{D} z_i^2 =0$ needs to be
followed. The ridge is smooth but very narrow. Due to
$T^{{1/2}}_\mathrm{asy}$ the overall shape deviates remarkably from
being quadratic.

-   conditioning is about $10^6$, rotated, unimodal

**Information gained from this function:**

-   Can the search continuously change its search direction?

</div>
<div id="text-f13">
### f<sub>13</sub>: Sharp ridge function {#f13}

$$f_{13}(\mathbf{x}) = z_1^2 + 100\,\sqrt{\sum_{i = 2}^{D} z_i^2} + f_\mathrm{opt}$$

-   $\mathbf{z}= \mathbf{Q}\Lambda^{\!10}\mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}})$

**Properties:**

As for the Bent Cigar function, a ridge defined as
$\sum_{i=2}^D z_i^2 = 0$ must be followed. The ridge is
non-differentiable and the gradient is constant when the ridge is
approached from any given point. Following the gradient becomes
ineffective close to the ridge where the ridge needs to be followed in
$z_1$-direction to its optimum. The necessary change in "search
behavior" close to the ridge is difficult to diagnose, because the
gradient towards the ridge does not flatten out.\
**Information gained from this function:**

-   In comparison to f<sub>12</sub>: What is the effect of non-smoothness,
    non-differentiabale ridge?
</div>
<div id="text-f14">
### f<sub>14</sub>: Different powers function {#f14}

$$f_{14}(\mathbf{x}) = \sqrt{\sum_{i = 1}^{D}|z_i|^{2+4\frac{i - 1}{D- 1}}} + f_\mathrm{opt}$$

-   $\mathbf{z}= \mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}})$

**Properties:**

Due to the different exponents the sensitivies of the $z_i$-variables
become more and more different when approaching the optimum.
</div>

<div id="text-g4">
## Multi-modal functions with adequate global structure
</div>

<div id="text-f15">
### f<sub>15</sub>: Rastrigin function {#f15}

$$f_{15}(\mathbf{x}) = 10 \left(D- \sum_{i = 1}^{D}\cos(2\pi z_i)\right) 
    + \|\mathbf{z}\|^2 + f_\mathrm{opt}$$

-   $\mathbf{z}= \mathbf{R}\Lambda^{\!10}\mathbf{Q}\,T^{{0.2}}_\mathrm{asy}(T_\mathrm{\hspace*{-0.01emosz}}(\mathbf{R}(\mathbf{x}-\mathbf{x^\mathrm{opt}})))$

**Properties:**

Prototypical highly multimodal function which has originally a very
regular and symmetric structure for the placement of the optima. The
transformations $T^{{}}_\mathrm{asy}$ and
$T_\mathrm{\hspace*{-0.01em}osz}$ alleviate the symmetry and regularity
of the original Rastrigin function.

-   non-separable less regular counterpart of $f_3$

-   roughly $10^D$ local optima

-   conditioning is about $10$

**Information gained from this function:**

-   in comparison to f<sub>3</sub>: What is the effect of non-separability for a
    highly multimodal function?
</div>
<div id="text-f16">
### f<sub>16</sub>: Weierstrass function {#f16}

$$f_{16}(\mathbf{x}) = 10 \left( \frac{1}{D} 
   \sum_{i = 1}^{D}\sum_{k = 0}^{11} 1/2^k \cos(2\pi3^k(z_i + 1/2))
            - f_0 \right)^3 + \frac{10}{D}f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$

-   $\mathbf{z}= \mathbf{R}\Lambda^{\!1/100}\mathbf{Q}\,T_\mathrm{\hspace*{-0.01emosz}}(\mathbf{R}(\mathbf{x}-\mathbf{x^\mathrm{opt}}))$

-   $f_0 = \sum_{k = 0}^{11} 1/2^k \cos(2\pi3^k 1/2)$

**Properties:**

Highly rugged and moderately repetitive landscape, where the global
optimum is not unique.

-   the term $\sum_k 1/2^k \cos(2\pi3^k\dots)$ introduces the
    ruggedness, where lower frequencies have a larger weight $1/2^k$.

-   rotated, locally irregular, non-unique global optimum

**Information gained from this function:**

-   in comparison to f<sub>17</sub>: Does ruggedness or a repetitive landscape
    deter the search behavior?
</div>
<div id="text-f17">
### f<sub>17</sub>: Schaffers F7 function {#f17}

$$f_{17}(\mathbf{x}) = \left(\frac{1}{D- 1}\sum_{i = 1}^{D- 1} \sqrt{s_i} + 
      \sqrt{s_i} \sin^2\!\left(50\,s_i^{1/5}\right)\right)^2 + 10\,f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$

-   $\mathbf{z}= \Lambda^{\!10}\mathbf{Q}\,T^{{0.5}}_\mathrm{asy}(\mathbf{R}(\mathbf{x}-\mathbf{x^\mathrm{opt}}))$

-   $s_i = \sqrt{z_i^2 + z_{i+1}^2}$ for $i=1,\dots,D$

**Properties:**

A highly multimodal function where frequency and amplitude of the
modulation vary.

-   asymmetric, rotated

-   conditioning is low
</div>
<div id="text-f18">
### f<sub>18</sub>: Schaffers F7 function, moderately ill-conditioned {#f18}

$$f_{18}(\mathbf{x}) = \left(\frac{1}{D- 1}\sum_{i = 1}^{D- 1} \sqrt{s_i} + 
      \sqrt{s_i} \sin^2\!\left(50\,s_i^{1/5}\right)\right)^2 + 10\,f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$

-   $\mathbf{z}= \Lambda^{\!1000}\mathbf{Q}\,T^{{0.5}}_\mathrm{asy}(\mathbf{R}(\mathbf{x}-\mathbf{x^\mathrm{opt}}))$

-   $s_i = \sqrt{z_i^2 + z_{i+1}^2}$ for
    $i=1,\dots,D$

**Properties:**

Moderately ill-conditioned counterpart to $f_{17}$

-   conditioning of about $1000$

**Information gained from this function:**

-   In comparison to f<sub>17</sub>: What is the effect of ill-conditioning?
</div>
<div id="text-f19">
### f<sub>19</sub>: Composite Griewank-Rosenbrock function F8F2 {#f19}

$$f_{19}(\mathbf{x}) = \frac{10}{D-1} \sum_{i=1}^{D-1} \left( \frac{s_i}{4000} - \cos(s_i) \right) + 10 + f_\mathrm{opt}$$

-   $\mathbf{z}= \max\!\left(1,\frac{\sqrt{D}}{8}\right)\mathbf{R}\mathbf{x}+ 0.5$

-   $s_i = 100\,(z_i^2 - z_{i+1})^2 + (z_i-1)^2$ for
    $i=1,\dots,D$

-   $\mathbf{z^\mathrm{opt}}=\mathbf{1}$

**Properties:**

Resembling the Rosenbrock function in a highly multimodal way.
</div>

<div id="text-g5">
## Multi-modal functions with weak global structure
</div>

<div id="text-f20">
### f<sub>20</sub>: Schwefel function {#f20}

$$f_{20}(\mathbf{x}) = - \frac{1}{100D}%  % kept in the final print
\sum_{i = 1}^{D}z_i\sin(\sqrt{|z_i|}) + 4.189828872724339 
     + 100f_{\mathrm{pen}}(\mathbf{z}/100) + f_\mathrm{opt}$$

-   $\hat{\mathbf{x}} = 2\times\mathbf{1_-^+}\otimes\mathbf{x}$

-   $\hat{z}_{1} = \hat{x}_{1}$,$\quad \hat{z}_{i+1} = \hat{x}_{i+1} + 0.25 \left({\hat{x}_{i}} - 2|x_i^{\text{opt}}| \right)$,$\quad \text{for } i = 1, \ldots, D - 1$

-   $\mathbf{z}= 100 (\Lambda^{10} (\hat{\mathbf{z}} - 2\left|\mathbf{x^\mathrm{opt}}\right|)$ + $2\left|\mathbf{x^\mathrm{opt}}\right|)$

-   $\mathbf{x^\mathrm{opt}}= 4.2096874633/2 \;\mathbf{1_-^+}$,
    where $\mathbf{1}_-^+$ is the same realization as above

**Properties:**

The most prominent $2^D$ minima are located comparatively
close to the corners of the unpenalized search area.

-   the penalization is essential, as otherwise more and better minima
    occur further away from the search space origin
</div>
<div id="text-f21">
### f<sub>21</sub>: Gallagher's Gaussian 101-me peaks function {#f21}

$$f_{21}(\mathbf{x}) = T_\mathrm{\hspace*{-0.01emosz}}\left( 10 - \max_{i=1}^{101} 
       w_i \exp\left(-\frac{1}{2D}\, 
           (\mathbf{x}-\mathbf{y}_i)^{\mathrm{T}}\mathbf{R}^{\mathrm{T}}
           \mathbf{C}_i \mathbf{R}(\mathbf{x}-\mathbf{y}_i) \right) \right)^2 + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$

-   $w_i = \begin{cases}
                  1.1 + 8 \times\dfrac{i-2}{99} & \text{for~} i=2,\dots,101 \\
    	      10 & \text{for~} i = 1 
    	      \end{cases}$, three optima have a value larger than $9$

-   $\mathbf{C}_i=\Lambda^{\!\alpha_i}/\alpha_i^{1/4}$
    where $\Lambda^{\!\alpha_i}$ is defined as usual (see [Symbols and definitions](#symbols-and-definitions)), 
-   but with randomly permuted diagonal
    elements. For $i=2,\dots,101$, $\alpha_i$ is drawn uniformly
    randomly from the set $\left\{1000^{2\frac{j}{99}} ~|~ j =
      0,\dots,99\right\}$ without replacement, and $\alpha_i=1000$ for
    $i=1$.

-   the local optima $\mathbf{y}_i$ are uniformly drawn
    from the domain
    $[-5,5]^D$ for $i=2,\dots,101$ and
    $\mathbf{y}_{1}\in[-4,4]^D$. The global
    optimum is at
    $\mathbf{x^\mathrm{opt}}=\mathbf{y}_1$.

**Properties:**

The function consists of $101$ optima with position and height being
unrelated and randomly chosen (different for each instantiation of the
function).

-   the conditioning around the global optimum is about $30$

**Information gained from this function:**

-   Is the search effective without any global structure?
</div>
<div id="text-f22">
### f<sub>22</sub>: Gallagher's Gaussian 21-hi peaks function {#f22}

$$f_{22}(\mathbf{x}) = T_\mathrm{\hspace*{-0.01emosz}}\left( 10 - \max_{i=1}^{21} 
       w_i \exp\left(-\frac{1}{2D}\, 
           (\mathbf{x}-\mathbf{y}_i)^{\mathrm{T}}\mathbf{R}^{\mathrm{T}}
           \mathbf{C}_i \mathbf{R}(\mathbf{x}-\mathbf{y}_i) \right) \right)^2 + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$

-   $w_i = \begin{cases}
                  1.1 + 8 \times\dfrac{i-2}{19} & \text{for~} i=2,\dots,21 \\
    	      10 & \text{for~} i = 1 
    	      \end{cases}$, two optima have a value larger than $9$

-   $\mathbf{C}_i=\Lambda^{\!\alpha_i}/\alpha_i^{1/4}$
    where $\Lambda^{\!\alpha_i}$ is defined as usual (see [Symbols and definitions](#symbols-and-definitions)), 
-   but with randomly permuted diagonal
    elements. For $i=2,\dots,21$, $\alpha_i$ is drawn uniformly randomly
    from the set $\left\{1000^{2\frac{j}{19}} ~|~ j =
      0,\dots,19\right\}$ without replacement, and $\alpha_i=1000^2$ for
    $i=1$.

-   the local optima $\mathbf{y}_i$ are uniformly drawn
    from the domain $[-4.9,4.9]^D$ for $i=2,\dots,21$ and
    $\mathbf{y}_{1}\in [-3.92,3.92]^D$. The global optimum is at
    $\mathbf{x^\mathrm{opt}}=\mathbf{y}_1$.

**Properties:**

The function consists of $21$ optima with position and height being
unrelated and randomly chosen (different for each instantiation of the
function).

-   the conditioning around the global optimum is about $1000$

**Information gained from this function:**

-   In comparison to f<sub>21</sub>: What is the effect of higher condition?
</div>
<div id="text-f23">
### f<sub>23</sub>: Katsuura function {#f23}

$$f_{23}(\mathbf{x}) = \frac{10}{D^{2}} \prod_{i=1}^D\left(1 + i\sum_{j=1}^{32} 
     \frac{\left|2^j z_i - [2^j z_i]\right|}{2^j} \right)^{10/D^{1.2}}
       - \frac{10}{D^{2}} + f_{\mathrm{pen}}(\mathbf{x}) + f_{\mathrm{opt}}$$

-   $\mathbf{z}= \mathbf{Q}\,\Lambda^{\!100}\mathbf{R}(\mathbf{x}-\mathbf{x^\mathrm{opt}})$

**Properties:**

Highly rugged and highly repetitive function with more than
$10^D$ global optima.
</div>
<div id="text-f24">
### f<sub>24</sub>: Lunacek bi-Rastrigin function {#f24}

$$f_{24}(\mathbf{x}) = \mathrm{min}\left(\sum_{i = 1}^{D}(\hat{x}_i - \mu_0)^2,
                       d\,D+ s\sum_{i = 1}^{D}(\hat{x}_i - \mu_1)^2\right)
           + 10\left(D- \sum_{i=1}^D\cos(2\pi z_i)\right) + 10^4\,f^{{}_\mathrm{pen}}(\mathbf{x}) + f_{\mathrm{opt}}$$

-   $\hat{\mathbf{x}} = 2\,\mathrm{{sign}}(\mathbf{x^\mathrm{opt}})\otimes\mathbf{x}$,
    $\mathbf{x^\mathrm{opt}}=$
    $\frac{\mu_0}{2}$
    $\mathbf{1_-^+}$

-   $\mathbf{z}= \mathbf{Q}\Lambda^{\!100}\mathbf{R}(\hat{\mathbf{x}}-\mu_0\,\mathbf{1})$

-   $\mu_0 = 2.5$, $\mu_1 = -\sqrt{\dfrac{\mu_0^2-d}{s}}$,
    $s = 1 - \dfrac{1}{2\sqrt{D+20}-8.2}$, $d=1$

**Properties:**

Highly multimodal function with two
funnels around
$\frac{\mu_0}{2}\mathbf{1_-^+}$ and
$\frac{\mu_1}{2}\mathbf{1_-^+}$ being superimposed by the
cosine. Presumably different approaches need to be used for "selecting
the funnel" and for searching the highly multimodal function "within" the
funnel. The function was constructed to be deceptive for evolutionary
algorithms with large population size.

-   the funnel of the local optimum at
    $\frac{\mu_1}{2}\mathbf{1_-^+}$ has roughly $70\%$ of
    the search space volume within $[-5,5]^D$.

**Information gained from this function:** Can the search behavior be
local on the global scale but global on a local scale?
</div>
