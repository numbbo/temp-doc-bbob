<div id="text-level-sets">
#### Level sets

These plots show level sets corresponding to some selected function values $f$ on a 2-D view of the search space 
that contains the optimal solution and is approximated by a grid. For dimensions larger than 2, the level sets of 
pairs of variables are organized into a matrix. To improve visibility, only five variables are included in the matrix 
in the larger dimensions ($D \geq 10$), corresponding to $x_1$, $x_2$, $x_{\lfloor D/2 \rfloor}$, $x_{D-1}$ and 
$x_D$, where $D$ is the search space dimension.
</div>

<div id="text-heatmap-rank">
#### Normalized rank heatmap

The normalized rank heatmap shows, instead of absolute function values $f$, their normalized rank with 0 corresponding
to the best rank and 1 to the worst one on a 2-D view of the search space that contains the optimal solution and is 
approximated by a grid. In addition to color-coded ranks, the plots include level sets in gray hues. For dimensions 
larger than 2, the heatmaps of pairs of variables are organized into a matrix. To improve visibility, only five 
variables are included in the matrix in the larger dimensions ($D \geq 10$), corresponding to $x_1$, $x_2$, 
$x_{\lfloor D/2 \rfloor}$, $x_{D-1}$ and $x_D$, where $D$ is the search space dimension.
</div>

<div id="text-surface">
#### Surface plot

The surface plot shows the function values $f$ on a 3-D view of the search space and is available only for 2-D problems.
To improve visibility, the z-axis is inverted, so that the global optimum is at the top of the plot.
</div>

<div id="text-cuts">
#### Search space cuts

The plots with search space cuts show the function value $f$ along various lines in the search space that go through 
the global optimum $\mathbf{x}_\mathrm{opt}$. The colored lines change the value of only one variable $x_i$ 
at a time keeping the rest fixed to $\mathbf{x}_\mathrm{opt}$. The gray line represents the line that goes through 
$\mathbf{x}_\mathrm{opt}$ in the direction of the all-ones vector (i.e., in the diagonal direction). 
To improve visibility, only five colored lines are shown in the larger dimensions ($D \geq 10$), corresponding to $x_1$, $x_2$, 
$x_{\lfloor D/2 \rfloor}$, $x_{D-1}$ and $x_D$, where $D$ is the search space dimension.
The plots are shown in three variants:

* **lin-lin**: both axes are linear,
* **lin-log**: the x-axis is linear, the y-axis shows the difference between $f$ and the optimal value $f_\mathrm{opt}$ 
on a logarithmic scale,
* **log-log**: both axes are logarithmic, the x-axis shows the absolute difference to $\mathbf{x}_\mathrm{opt}$ 
(positive directions presented as $x_i$ and negative as $-x_i$), the y-axis shows the difference between $f$ and 
$f_\mathrm{opt}$. 
</div>
