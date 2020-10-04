# LaTex

::: tip
Zamyslete se nad tím, jak moc dobře umíte v MS Wordu pracovat se styly. LaTex píšete v prostém textu a jen Vám umožňuje měnit potřebné části textů. Tedy nemůžete udělat chybu, protože formátování obsahuje šablona!
:::

::: warning
Závěrečnou práci Vám bez předchozí domluvy a vážného důvodu nebudu v jiném formátu než LaTex tolerovat.
:::

Rychlý úvod do LaTexu [naleznete zde](/a-quick-guide-to-latex.pdf).

## Šablona závěrečné práce FIM-UHK pro latex

[https://github.com/xdobro4/uhk-thesis-latex-template](https://github.com/xdobro4/uhk-thesis-latex-template)

::: tip
Změna šablony v LaTexu je přepsání jednoho řádku. Kolik práce to obnáší v MS Word?
:::

## Formátování

Celkově pěknou dokumentaci LaTexu poskytuje overleaf.com ve [své dokumentaci](https://www.overleaf.com/learn/latex/Main_Page). Je tam mnoho užitečných rad a praktických ukázek.

Ty nejdůležitější:
- [Nadpisy](https://www.overleaf.com/learn/latex/Sections_and_chapters)
- [Obrázky](https://www.overleaf.com/learn/latex/Inserting_Images)
- [Tabulky](https://www.overleaf.com/learn/latex/Tables)




## Čeština

Za `\documentclass` přidejte na nové řádky níže uvedené balíčky.

```latex
\usepackage[czech]{babel}
\usepackage[utf8]{inputenc}
```

## Prohledávatelnost PDF

```latex
\usepackage{cmap} 		% Balíček cmap zajišťuje, že PDF vytvořené `pdflatexem' je
											% plně "prohledávatelné" a "kopírovatelné"
```

## Zkratky

Přidáme balíček na zkratky.
```latex
\usepackage{acro}
```

Před přikazen `\begin{document}` definujeme seznam zkratek.
```latex
\DeclareAcronym{PSNR}{
  short=PSNR,
  long=peak signal-to-noise ratio
}
```

Zkratku pak používáme jednoduše pomocí:
```latex
\ac{PSNR}
```

## Bibtex ISO formát citací

Pridáme použití balíčku URL pro internetové zdroje.
```latex
% for citing
\usepackage{url}
\DeclareUrlCommand\url{\def\UrlLeft{<}\def\UrlRight{>} \urlstyle{tt}}
```

Pak již jen importujeme styl:
```latex
\bibliographystyle{czechiso.bst}
\bibliography{references.bib}
```

Styl je možno [stáhnout zde](/czechiso.bst).

### Matematika
Matematika je s LaTexem hračka! Nezapoměňte te však používat mat. značky i v textu kolem znaků nebo čísel.

Pokud použiji číslo či řecké písmeno v textu. Je třeba jej obalit znaky dolaru `$`.

Př: 
```latex
\section{Naměřené výsledky}
Nejlepší síť měla na testovaných datech medián úspěšnosti přibližně $ 30,0944 $ db při metodě PSNR a dvojnásobném zvětšení vstupu. \dots
```

[Cheat sheet](http://tug.ctan.org/info/undergradmath/undergradmath.pdf) pro LaTexovou matiku.

## Dopořučení

Googlujte!!
