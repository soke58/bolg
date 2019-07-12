---
layout: post
title:  "��������"
date:   2019-07-12 10:40:11 ������
categories: default
tags: test

------------
[========]
            
### ��ѧ��ʽ TeX(KaTeX)

$$E=mc^2$$

���ڵĹ�ʽ$$E=mc^2$$���ڵĹ�ʽ�����ڵ�$$E=mc^2$$��ʽ��

$$x > y$$

$$\(\sqrt{3x-1}+(1+x)^2\)$$
                    
$$\sin(\alpha)^{\theta}=\sum_{i=0}^{n}(x^i + \cos(f))$$

���й�ʽ��

```math
\displaystyle
\left( \sum\_{k=1}^n a\_k b\_k \right)^2
\leq
\left( \sum\_{k=1}^n a\_k^2 \right)
\left( \sum\_{k=1}^n b\_k^2 \right)
```

```katex
\displaystyle 
    \frac{1}{
        \Bigl(\sqrt{\phi \sqrt{5}}-\phi\Bigr) e^{
        \frac25 \pi}} = 1+\frac{e^{-2\pi}} {1+\frac{e^{-4\pi}} {
        1+\frac{e^{-6\pi}}
        {1+\frac{e^{-8\pi}}
         {1+\cdots} }
        } 
    }
```

```latex
f(x) = \int_{-\infty}^\infty
    \hat f(\xi)\,e^{2 \pi i \xi x}
    \,d\xi
```

### ��ҳ�� Page break

> Print Test: Ctrl + P

[========]

### ��������ͼ Flowchart

```flow
st=>start: �û���½
op=>operation: ��½����
cond=>condition: ��½�ɹ� Yes or No?
e=>end: �����̨

st->op->cond
cond(yes)->e
cond(no)->op
```

[========]
                    
### ��������ͼ Sequence Diagram
                    
```seq
Andrew->China: Says Hello 
Note right of China: China thinks\nabout it 
China-->Andrew: How are you? 
Andrew->>China: I am good thanks!
```