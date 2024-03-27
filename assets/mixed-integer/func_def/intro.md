# Introduction

Real-world optimization problems are often mixed-integer, that is,
include integer as well as continuous variables. Many examples of such
problems come from mechanical engineering, where some variables can only
assume a limited set of possible values, for example, categorical
variables or variables describing components of standard sizes
(predefined pipe diameters, steel plate thicknesses, etc.) or integer
quantities (such as the number of heat exchanger tubes). Nevertheless,
most research in Evolutionary Computation (EC) is devoted to either
continuous or discrete optimization problems, while studies on
mixed-integer problems are often limited to specific applications.
Systematic research on the performance of mixed-integer algorithms is
hindered by the lack of appropriate test suites that would support the
laborious task of algorithm benchmarking.

This does not mean that there are no available mixed-integer benchmarks.
MINLPLib, for example, is a well-known collection of
over 1000 mixed-integer test problem instances. However, it is designed
for benchmarking mathematical programming solvers and cannot be easily
interfaced with black-box optimizers such as evolutionary algorithms. In
the EC field, other selections of test problems that are similar in
nature to MINLPLib (but much smaller) are being
used. In addition, the
AClib library serves as a collection of benchmark problems
arising from algorithm configuration tasks. Nevertheless, the general
impression is that there are no 'standard' benchmarks for analyzing and
comparing mixed-integer black-box optimizers and researchers seem
compelled to propose new problems in order to benchmark their
algorithms.

The mentioned works provide mere collections of problems, not actual
benchmarking suites where careful consideration is given to selecting
problems of diverse difficulties and varying dimensions in order to
investigate algorithm performance in a methodical way. To the best of
our knowledge, there have been only three systematic efforts in this
direction. NK landscapes were extended to
support mixed (continuous, categorical and integer) variables. Also six mixed-integer problems were proposed, constructed as
discretized versions of the CEC benchmark functions. Finally, a suite of mixed-integer benchmarks was proposed for
multi-objective optimization constructed by separately defining the
position and distance parameters, the shape of the front and
correlations between objectives.