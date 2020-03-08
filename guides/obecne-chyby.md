# Obecné chyby

::: tip
Úvod, závěr a abstrakt se píší až úplně na závěr! To je to poslední na čem budete pracovat.
:::

## TODO jak začít
osnova až na odstavce

každá první věta musí dávat smysl i bez zbytku odstavce

## Abstrakt
Do abstraktu patří:
- jaká je oblast výzkumu, 
- co je za probém,
- jak to metodicky řeíme, 
- jaké výslekdy máme a co to přináší/jaké jsou možnosti využití,
- plus možná další směřování..

## Obrázky

Popisek obrázku umístěn pod obrázkem a musí být jasný! Je třeba aby i v seznamu obrázků bylo jasné co obsahuje.

```latex
\begin{figure}
    \centering
    \includegraphics[width=\columnwidth]{./overleaf-share-link.png}
    \caption{Popisek který v seznamu obrázků dává smysl}
    \label{fig:my_label}
\end{figure}
```

![search.png](../img/caption.png)

## Tabulky

Tabulka musí mít hlavičku, popisek (caption) umístěný nad tabulkou.

```latex
\begin{table}[hbt!]  
\centering
\caption{Průměry}
\begin{tabular}{| l | r | r | r | }
\hline
        &        PSNR &      SSIM &      doba  \\
model &       (db)    &           & gen. (s) \\
\hline
bik. int. & 28.3155 & 0.8566 & 0.0322 \\
NN1000    & 30.1461 & 0.9043 & 0.8109 \\
NN1001    & 30.0324 & 0.9023 & 0.7486 \\
NN1002    & \textbf{30.1886} & \textbf{0.9046} & 1.1731 \\
NN1003    & 30.0390 & 0.9030 & 1.1320 \\
NN1004    & 24.9772 & 0.7172 & 4.4367 \\
NN1005    & 26.1629 & 0.8004 & 4.0475 \\
NN1006    & 27.9129 & 0.8438 & 4.0683 \\
NN1007    & 27.5834 & 0.8360 & 4.2082 \\
\hline
\end{tabular}
\end{table}
```

![search.png](../img/table.png)


## TODO překlady + polopřeklady

## Nejednotnost slov

Během práce narazíte určitě na slova, kde si nebudete jistí jak je psát. Příkladem může být: `super-resolution` nebo `superresolution` nebo `super resolution`. V podstatě nejde i nic. Jen by jste se měli ve své práci držet jednoho oznašení. Nejjednodužší je použít systémové řešení.

Definice výrazu
```latex
\newcommand\superresolution{super-resolution}
```

Pužití v textu je pak jednoduché!
```latex
Nadvzorkování, neboli \superresolution, je sada metod pro nadvzorkování obrazu. Může se jednat o jedno snímkové obrázky nebo sekvence snímků (videa). Jedná se o metody sloužící k rekonstruování obrazu nízkého rozlišení do obrazu vysokého rozlišení. 
```

Výsledek:
![search.png](../img/superresolution.png)

Ti co používájí word se musí spolehnout jen na sebe :|.

## TODO Citování

Citování je několik možností. Já používám tyhle 3 základní formy.

Věta (před tečkou)
```latex
Architekturu dopředné (vrstvené, vícevrstvé, acyklické) sítě tvoří acyklický graf \cite{zdroj}.
```

Odstavec (za tečkou poslední věty)
```latex
Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Nullam justo enim, consectetuer nec, ullamcorper ac, vestibulum in, elit. Praesent vitae arcu tempor neque lacinia pretium. Nunc dapibus tortor vel mi dapibus sollicitudin. Duis sapien nunc, commodo et, interdum suscipit, sollicitudin et, dolor. Vivamus luctus egestas leo. Aliquam in lorem sit amet leo accumsan lacinia. Integer imperdiet lectus quis justo. Donec ipsum massa, ullamcorper in, auctor et, scelerisque sed, est. Nam quis nulla. Nam sed tellus id magna elementum tincidunt. Duis pulvinar. Nullam lectus justo, vulputate eget mollis sed, tempor sed magna. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Sed convallis magna eu sem. Mauris elementum mauris vitae tortor. Suspendisse nisl. Aliquam erat volutpat. \cite{zdroj}
```

Vyhnutí se citování několika ostavců stejným zdrojem:
```latex
Podrovnější popis problematiky je nad rámec práce a je obsažen v knize Taxonomie výpočetních modelů neuronových sítí:
Od subregulárních jazyků k super-turingovským výpočtům
 \cite{sima_taxonomy_1996}.
```

Zda se vloží číslo `[1]` nebo `(Šíma, 1996)`, činý styl oblivňuje příkaz `\bibliographystyle{_czechiso}`, který se dává na konec práce před použitou literaturu. Ta se vypisuje příkazem: `\bibliography{references.bib}`.


## TODO odsazování

## TODO vysvětlení rovnic
