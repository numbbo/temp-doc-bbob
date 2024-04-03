
# Functions with moderate noise

## Sphere

$$f_\mathrm{sphere}(\mathbf{x}) = \|\mathbf{z}\|^2$$

-   $\mathbf{z}= \mathbf{x}- \mathbf{x^\mathrm{opt}}$

#### Properties

Presumably the most easy continuous domain search problem, given the
volume of the searched solution is small (i.e. where pure monte-carlo
random search is too expensive).

-   unimodal

-   highly symmetric, in particular rotationally invariant

### $F_{101}:~$ Sphere with moderate gaussian noise

$$f_{101}(\mathbf{x}) = f_{\mathrm{GN}}({f_\mathrm{sphere}(\mathbf{x}),0.01}) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{102}:~$ Sphere with moderate uniform noise

$$f_{102}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{sphere}(\mathbf{x}),0.01\left(0.49 + \dfrac{1}{D}\right),0.01}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{103}:~$ Sphere with moderate seldom cauchy noise

$$f_{103}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{sphere}(\mathbf{x}),0.01,0.05}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


## Rosenbrock

$$f_\mathrm{rosenbrock}(\mathbf{x}) = \sum_{i = 1}^{D-1} 100\,\left(z_i^2 - z_{i+1}\right)^2 + (z_i-1)^2$$

-   $\mathbf{z}= \max\!\left(1,\frac{\sqrt{D}}{8}\right)(\mathbf{x}- \mathbf{x^\mathrm{opt}}) + 1$

-   $\mathbf{z^\mathrm{opt}}=\mathbf{1}$

#### Properties

So-called banana function due to its 2-D contour lines as a bent ridge
(or valley). In the beginning, the prominent first term of the function
definition attracts to the point
$\mathbf{z}=\mathbf{0}$. Then, a long bending
valley needs to be followed to reach the global optimum. The ridge
changes its orientation $D-1$ times.

-   in larger dimensions the function has a local optimum with an
    attraction volume of about 25%

### $F_{104}:~$ Rosenbrock with moderate gaussian noise

$$f_{104}(\mathbf{x}) = f_{\mathrm{GN}}\left({f_\mathrm{rosenbrock}(\mathbf{x}),0.01}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{105}:~$ Rosenbrock with moderate uniform noise

$$f_{105}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{rosenbrock}(\mathbf{x}),0.01\left(0.49 + \dfrac{1}{D}\right),0.01}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{106}:~$ Rosenbrock with moderate seldom cauchy noise

$$f_{106}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{rosenbrock}(\mathbf{x}),0.01,0.05}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


# Functions with severe noise

## Sphere 

$$f_\mathrm{sphere}(\mathbf{x}) = \|\mathbf{z}\|^2$$

-   $\mathbf{z}= \mathbf{x}- \mathbf{x^\mathrm{opt}}$

#### Properties

Presumably the most easy continuous domain search problem, given the
volume of the searched solution is small (i.e. where pure monte-carlo
random search is too expensive).

-   unimodal

-   highly symmetric, in particular rotationally invariant

### $F_{107}:~$ Sphere with gaussian noise

$$f_{107}(\mathbf{x}) = f_{\mathrm{GN}}\left({f_\mathrm{sphere}(\mathbf{x}),1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{108}:~$ Sphere with uniform noise

$$f_{108}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{sphere}(\mathbf{x}),0.49 + \dfrac{1}{D},1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{109}:~$ Sphere with seldom cauchy noise

$$f_{109}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{sphere}(\mathbf{x}),1,0.2}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


## Rosenbrock 

$$f_\mathrm{rosenbrock}(\mathbf{x}) = \sum_{i = 1}^{D-1} 100\,\left(z_i^2 - z_{i+1}\right)^2 + (z_i-1)^2$$

-   $\mathbf{z}= \max\!\left(1,\frac{\sqrt{D}}{8}\right)(\mathbf{x}- \mathbf{x^\mathrm{opt}}) + 1$

-   $\mathbf{z^\mathrm{opt}}=\mathbf{1}$

#### Properties

So-called banana function due to its 2-D contour lines as a bent ridge
(or valley). In the beginning, the prominent first term of the function
definition attracts to the point
$\mathbf{z}=\mathbf{0}$. Then, a long bending
valley needs to be followed to reach the global optimum. The ridge
changes its orientation $D-1$ times.

-   a local optimum with an attraction volume of about 25%

### $F_{110}:~$ Rosenbrock with gaussian noise

$$f_{110}(\mathbf{x}) = f_{\mathrm{GN}}\left({f_\mathrm{rosenbrock}(\mathbf{x}),1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{111}:~$ Rosenbrock with uniform noise

$$f_{111}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{rosenbrock}(\mathbf{x}),0.49 + \dfrac{1}{D},1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{112}:~$ Rosenbrock with seldom cauchy noise

$$f_{112}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{rosenbrock}(\mathbf{x}),1,0.2}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


## Step ellipsoid 

$$f_\mathrm{step}(\mathbf{x}) = 0.1 \max\left(|\hat{z}_1|/10^4,\, \sum_{i = 1}^{D} 10^{2\frac{i-1}{D-1}} z_i^2\right)$$

-   $\hat{\mathbf{z}} = \Lambda^{\!10}\mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}})$

-   $\tilde{z}_i = \begin{cases}
                     \lfloor0.5+\hat{z}_i\rfloor & \text{if~} \hat{z}_i > 0.5 \\
                     {\lfloor0.5+10\,\hat{z}_i\rfloor}/{10} & \text{otherwise}
                    \end{cases}$ for $i=1,\dots,D$,\
    denotes the rounding procedure in order to produce the plateaus.

-   $\mathbf{z}= \mathbf{Q}\tilde{\mathbf{z}}$

#### Properties

The function consists of many plateaus of different sizes. Apart from a
small area close to the global optimum, the gradient is zero almost
everywhere.

-   condition number is about $100$

### $F_{113}:~$ Step ellipsoid with gaussian noise

$$f_{113}(\mathbf{x}) = f_{\mathrm{GN}}\left({f_\mathrm{step}(\mathbf{x}),1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{114}:~$ Step ellipsoid with uniform noise

$$f_{114}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{step}(\mathbf{x}),0.49 + \dfrac{1}{D},1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{115}:~$ Step ellipsoid with seldom cauchy noise

$$f_{115}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{step}(\mathbf{x}),1,0.2}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


## Ellipsoid

$$f_\mathrm{ellipsoid}(\mathbf{x}) = \sum_{i = 1}^{D} 10^{4\frac{i-1}{D-1}}z_i^2$$

-   $\mathbf{z}= T_\mathrm{\hspace*{-0.01emosz}}(\mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}}))$

#### Properties

Globally quadratic ill-conditioned function with smooth local
irregularities.

-   condition number is $10^4$

### $F_{116}:~$ Ellipsoid with gaussian noise

$$f_{116}(\mathbf{x}) = f_{\mathrm{GN}}\left({f_\mathrm{ellipsoid}(\mathbf{x}),1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{117}:~$ Ellipsoid with uniform noise

$$f_{117}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{ellipsoid}(\mathbf{x}),0.49 + \dfrac{1}{D},1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{118}:~$ Ellipsoid with seldom cauchy noise

$$f_{118}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{ellipsoid}(\mathbf{x}),1,0.2}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


## Different Powers 

$$f_\mathrm{diffpowers}(\mathbf{x}) = \sqrt{\sum_{i = 1}^{D}|z_i|^{2+4\frac{i - 1}{D- 1}}}$$

-   $\mathbf{z}= \mathbf{R}(\mathbf{x}- \mathbf{x^\mathrm{opt}})$

#### Properties

Due to the different exponents the sensitivies of the $z_i$-variables
become more and more different when approaching the optimum.

### $F_{119}:~$ Different Powers with gaussian noise

$$f_{119}(\mathbf{x}) = f_{\mathrm{GN}}\left({f_\mathrm{diffpowers}(\mathbf{x}),1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{120}:~$ Different Powers with uniform noise

$$f_{120}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{diffpowers}(\mathbf{x}),0.49 + \dfrac{1}{D},1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{121}:~$ Different Powers with seldom cauchy noise

$$f_{121}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{diffpowers}(\mathbf{x}),1,0.2}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


# Highly multi-modal functions with severe noise

## Schaffer's F7

$$f_\mathrm{schaffer}(\mathbf{x}) = \left(\frac{1}{D- 1}\sum_{i = 1}^{D- 1} \sqrt{s_i} +
      \sqrt{s_i} \sin^2\!\left(50\,s_i^{1/5}\right)\right)^2$$

-   $\mathbf{z}= \Lambda^{\!10}\mathbf{Q}\,T^{{0.5}}_\mathrm{asy}(\mathbf{R}(\mathbf{x}-\mathbf{x^\mathrm{opt}}))$

-   $s_i = \sqrt{z_i^2 + z_{i+1}^2}$ for $i=1,\dots,D$

#### Properties

A highly multimodal function where frequency and amplitude of the
modulation vary.

-   conditioning is low

### $F_{122}:~$ Schaffer's F7 with gaussian noise

$$f_{122}(\mathbf{x}) = f_{\mathrm{GN}\left({f_\mathrm{schaffer}(\mathbf{x}),1}\right)} + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{123}:~$ Schaffer's F7 with uniform noise

$$f_{123}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{schaffer}(\mathbf{x}),0.49 + \dfrac{1}{D},1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{124}:~$ Schaffer's F7 with seldom cauchy noise

$$f_{124}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{schaffer}(\mathbf{x}),1,0.2}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


## Composite Griewank-Rosenbrock 

$$f_\mathrm{f8f2}(\mathbf{x}) = \frac{1}{D-1} \sum_{i=1}^{D-1}
     \left(\frac{s_i}{4000} - \cos(s_i)\right) + 1$$

-   $\mathbf{z}= \max\!\left(1,\frac{\sqrt{D}}{8}\right)\mathbf{R}\mathbf{x}+ 0.5$

-   $s_i = 100\,(z_i^2 - z_{i+1})^2 + (z_i-1)^2$ for
    $i=1,\dots,D$

-   $\mathbf{z^\mathrm{opt}}=\mathbf{1}$

#### Properties

Resembling the Rosenbrock function in a highly multimodal way.

### $F_{125}:~$ Composite Griewank-Rosenbrock with gaussian noise

$$f_{125}(\mathbf{x}) = f_{\mathrm{GN}}\left({f_\mathrm{f8f2}(\mathbf{x}),1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{126}:~$ Composite Griewank-Rosenbrock with uniform noise

$$f_{126}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{f8f2}(\mathbf{x}),0.49 + \dfrac{1}{D},1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{127}:~$ Composite Griewank-Rosenbrock with seldom cauchy noise

$$f_{127}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{f8f2}(\mathbf{x}),1,0.2}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


## Gallagher's Gaussian Peaks, globally rotated

$$f_\mathrm{gallagher}(\mathbf{x}) = T_\mathrm{\hspace*{-0.01emosz}}\left(10 - \max_{i=1}^{101}
                w_i \exp\left(-\frac{1}{2D}\,
               (\mathbf{x}-\mathbf{y}_i)^{\mathrm{T}}\mathbf{R}^{\mathrm{T}}
                \mathbf{C}_i \mathbf{R}(\mathbf{x}-\mathbf{y}_i) \right)\right)^2$$

-   $w_i = \begin{cases}
                  1.1 + 8 \times\dfrac{i-2}{99} & \text{for~} i=2,\dots,101 \\
    	      10 & \text{for~} i = 1
    	      \end{cases}$, three optima have a value larger than $9$

-   $\mathbf{C}_i=\Lambda^{\!\alpha_i}/\alpha_i^{1/4}$
    where $\Lambda^{\!\alpha_i}$ is defined as usual, but with randomly permuted diagonal
    elements. For $i=2,\dots,101$, $\alpha_i$ is drawn uniformly
    randomly from the set $\left\{1000^{2\frac{j}{99}} ~|~ j =
      0,\dots,99\right\}$ without replacement, and $\alpha_i=1000$ for
    $i=1$.

-   the local optima $\mathbf{y}_i$ are uniformly drawn
    from the domain $[-4.9,4.9]^D$ for $i=2,\dots,101$ and
    $\mathbf{y}_{1}\in[-4,4]^D$. The global
    optimum is at
    $\mathbf{x^\mathrm{opt}}=\mathbf{y}_1$.

#### Properties

The function consists of $101$ optima with position and height being
unrelated and randomly chosen.

-   condition number around the global optimum is about $30$

-   same overall rotation matrix

### $F_{128}:~$ Gallagher's Gaussian Peaks 101-me with gaussian noise

$$f_{128}(\mathbf{x}) = f_{\mathrm{GN}}\left({f_\mathrm{gallagher}(\mathbf{x}),1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{129}:~$ Gallagher's Gaussian Peaks 101-me with uniform noise

$$f_{129}(\mathbf{x}) = f_{\mathrm{UN}}\left({f_\mathrm{gallagher}(\mathbf{x}),0.49 + \dfrac{1}{D},1}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$


### $F_{130}:~$ Gallagher's Gaussian Peaks 101-me with seldom cauchy noise

$$f_{130}(\mathbf{x}) = f_{\mathrm{CN}}\left({f_\mathrm{gallagher}(\mathbf{x}),1,0.2}\right) + f_{\mathrm{pen}}(\mathbf{x}) + f_\mathrm{opt}$$