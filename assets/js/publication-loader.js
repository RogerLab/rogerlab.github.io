document.addEventListener("DOMContentLoaded", () => {
    const publications = {
        2026: [
            'Boisard J., Williams S.K., Roger A.J. and Stairs C.W. (2026) CoMR: an integrative scoring pipeline for comprehensive mitochondrial proteome reconstruction across eukaryotes. bioRxiv: <a href="https://doi.org/10.64898/2026.02.20.707009">https://doi.org/10.64898/2026.02.20.707009</a>',
            'Yi. Z., Williams S.K., Leger M.M., Brask N., Salas-Leiva D., Silberman J.D., Eglit Y., Simpson A.G.B., Roger A.J., Stairs C.W. (2026) Divergent trajectories for anaerobic mitochondrial evolution in breviate protists. bioRxiv: <a href="https://doi.org/10.64898/2026.01.29.702055">https://doi.org/10.64898/2026.01.29.702055</a>',
            'Susko E., Lanfear R. and Roger A.J. (2026) Comparing partition and mixture models with Akaike Information Criteria. Syst. Biol. <a href=https://doi.org/10.1093/sysbio/syag013>https://doi.org/10.1093/sysbio/syag013</a>',
            'Raas W.D., Van Hooff J.J.E., Lukeš J., Richards T.A., Roger A.J., Wickstead B., Kops G.J.P.L., Snel B. and Tromer E.C. (2026) The LECA had a conventional kinetochore and the kinetoplastid kinetochore is a derived feature—a critical evaluation of Akiyoshi, 2025. J. Cell Sci. 139: jcs264452',
            'McCarthy C.G.P., Susko E. and Roger A.J. (2026) Modeling site-and-branch heterogeneity with GFmix.  Syst. Biol. (under review) see: <a href=https://www.biorxiv.org/content/10.1101/2025.08.07.669136v1.abstract>https://www.biorxiv.org/content/10.1101/2025.08.07.669136v1.abstract</a>'
        ],
        2025: [
            'Sibbald S.J., Lawton M., Maclean C., Roger A.J. and Archibald J.M. (2025) Pangenome biology and evolution in harmful algal-bloom-forming pelagophytes. Curr. Biol. (in press)',
            'Harada R., Shiratori T., Yabuki A., Inagaki Y., Roger A.J. and Kamikawa R. (2025) Complete mitochondrial genomes of ancyromonads provide clues for the gene content and genome structures of ancestral mitochondria. J. Euk. Microbiol. 72: e70012',
            'Baker B.A., McCarthy C.G.P., Lopez-Garcia P., Leroy R.B., Susko E., Roger A.J., Eme L. and Moreira D.  (2025) Phylogenomic analyses indicate the archaeal superphylum DPANN originate from free-living euryarchaeal-like ancestors.  Nat. Microbiol. 10: 1593-1604 <a href=https://doi.org/10.1038/s41564-025-02024-5>https://doi.org/10.1038/s41564-025-02024-5</a>',
            'Williamson K., Eme L., Baños H., McCarthy C.G.P., Susko E., Kamikawa R., Orr R.J.S., Muñoz-Gómez S.A., Minh B.Q., Simpson A.G.B., and Roger A.J. (2025) A robustly rooted tree of eukaryotes reveals their excavate ancestry. Nature 640: 974-981 <a href=https://doi.org/10.1038/s41586-025-08709-5>https://doi.org/10.1038/s41586-025-08709-5</a>',
            'Zhao D., Salas-Leiva D.E., Williams S.K., Dunn K., Shao J.D., and Roger A.J. (2025) Eukfinder: a pipeline to retrieve microbial eukaryote genomes from metagenomic sequencing data. mBio 16:e00699-25 <a href=https://10.1128/mbio.00699-25>https://10.1128/mbio.00699-25</a>',
            'Pánek T., Tice A.K., Corre P., Hrubá P., Žihala D., Kamikawa R., Yazaki E., Shiratori T., Kume K. Hashimoto T., Ishida K., Hradilová M., Silberman J.D., Roger A.J., Inagaki Y., Eliás M., Brown M.W., Čepička I.  (2025) An expanded phylogenomic analysis of Heterolobosea reveals the deep relationships, non-canonical genetic codes, and cryptic flagellate stages in the group. Mol. Phylogenet. Evol. 204:108289'
        ],
        2024: [
            'Baños H., Wong T. K.F., Daneau J., Susko E., Minh B.Q., Lanfear R., Brown M.W., Eme L. and Roger A.J. (2024) GTRpmix: A linked general-time reversible model for profile mixture models. Mol. Biol. Evol. msae174 <a href=https://doi.org/10.1093/molbev/msae174>https://doi.org/10.1093/molbev/msae174</a>',
            'Jerlström-Hultqvist J., Gallot-Lavallée L., Salas-Leiva D.E., Curtis B.A., Záhonová K., Čepička I., Stairs C.W., Pipaliya S., Dacks J.B., Archibald J.M. and Roger A.J. (2024) A unique symbiosome in an anaerobic single-celled eukaryote. Nat. Communications <a href=https://doi.org/10.1038/s41467-024-54102-7>https://doi.org/10.1038/s41467-024-54102-7</a>',
            'Williams S.K., Jerlstrom-Hultqvist, J., Eglit, Y., Salas-Leiva D.E., Curtis, B. Orr, R.J.S., Stairs, C.W., Simpson, A.G.B, and Roger A. J. (2024) Extreme mitochondrial reduction in a newly-discovered group of free-living protists. Nat. Communications 15: 6805 (2024). <a href=https://doi.org/10.1038/s41467-024-50991-w>https://doi.org/10.1038/s41467-024-50991-w</a>',
            'Eglit Y., Williams S.K., Roger A.J. and Simpson A.G.B. (2024) Characterization of Skoliomonas gen. nov., a haloalkaliphilic anaerobe related to barthelonids (Metamonada).  J. Euk. Microbiol. <a href=https://doi.org/jeu.13048>https://doi.org/jeu.13048</a>',
            'Baker B., Gutiérrez-Preciado A., Rodriguez del Rio A., McCarthy C.G.P, López-Garcia P., Huerta-Cepas J., Susko E., Roger A.J., Eme L. and Moreira D. (2024) Expanded phylogeny of extremely halophilic archaea shows multiple independent adaptations to hypersaline environments. Nat. Microbiol. 9: 964-975',
            'Baños H., Susko E. and Roger A.J. (2024) Is over-parameterization a problem for profile mixture models? Syst. Biol. 73:53-75'
        ],
        2023: [
            'Eglit Y., Shiratori T., Jerlström-Hultqvist J., Williamson K., Roger, A.J., Ishida K., and Simpson A.G.B. (2023) Meteora sporadica, a protist with incredible cell architecture, is related to Hemimastigophora. Curr. Biol. 34:451-459',
            'Záhonová K., Füssy Z., Stairs C.W., Leger M.M., Tachezy J., Čepička I., Roger A.J., and Hampl V. (2023) Comparative analysis of mitochondrion-related organelles in anaerobic amoebozoans. Micro. Gen. 11:00143',
            'Gallot-Lavallée L., Jerlström-Hultqvist J., Salas-Leiva D.E., Stairs C.W., Čepička I., Roger A.J. and Archibald J.M. (2023) Massive intein content in Anaeramoeba reveals new aspects of intein mobility in eukaryotes. Proc. Natl. Acad. Sci. USA 120: e2306381120',
            'Muñoz-Gómez S.A., Cadena L.R., Gardiner A.T., Leger M.M., Sheikh S., Connell L.B., Bily T., Kopejtka K., Beatty J.T., Koblížek M., Roger A.J., Slamovits C.H., Lukeš J. and Hashimi H. (2023) Intracytoplasmic-membrane development in alphaproteobacteria involves the homolog of the mitochondrial crista-developing protein Mic60. Curr. Biol. 33:1099-1111',
            'Higuera A., Salas-Leiva D.E., Curtis B.A., Patiño L.H., Zhao D., Jerlström-Hultqvist J, Dlutek M., Muñoz M., Roger A.J., Ramírez J.D. (2023) Draft genomes of Blastocystis subtypes from human samples of Colombia. Parasites & Vectors 1:1-10.'
        ],
        2022: [
            'Hess S., Williams S.K., Busch A., Irisarri I., Delwiche C.F., de Vries S., Darienko T., Roger A.J., Archibald J.M., Buschmann H., von Schwartzenberg K. and de Vries J. (2022) A phylogenomically informed five-order system for the closest relatives of land plants. Curr. Biol. 32:4473-4482.e7',
            'Gerbracht J.V., Harding T., Simpson A.G.B., Roger A.J., Hess S. (2022) Comparative transcriptomics reveals the molecular toolkit used by an algivorous protist for cell wall perforation. Curr. Biol. 32:3374-3384. e5',
            'Mathavarajah S., Vergunst K.L., Williams S.K., He R., Maliougina M., Habib E.B., Park M., Salsman J., Roy s., Braasch I. Roger A.J., Langelaan D.N. and Dellaire G. (2022) PML and PML-like exonucleases restrict retrotransposons in jawed vertebrates. Nucleic Acids Res. 51: 3185-3204',
            'Youssef N., Susko E., Roger A.J. and Bielawski J.P. (2022) Evolution of amino acid propensities under stability-mediated epistasis.  Mol. Biol. Evol. 39:msac030 <a href=https://doi.org/10.1093/molbev/msac030>https://doi.org/10.1093/molbev/msac030</a>',
            'Muñoz-Gómez S.A., Susko E., Williamson K., Eme L., Slamovits C.H., Moreira D., López-García P. and Roger A.J. (2022) Site-and-branch-heterogeneous analyses of an expanded dataset favors mitochondria as sister to known Alphaproteobacteria. Nat. Ecol. Evol. https://doi.org/10.1038/s41559-021-01638-2'
        ],
        2021: [
            'Salas-Leiva D.E., Tromer E.C., Curtis B.A., Jerlström-Hultqvist J., Kolisko M., Yi Z., Salas-Leiva J., Gallot-Lavallée L., Kops G.J.P.L., Archibald J.M., Simpson A.G.B., Roger A.J. (2021) A free-living protist that lacks canonical eukaryotic DNA replication and segregation systems. Nat. Communications. 12: 6003. <a href=https://doi.org/10.1038/s41467-021-26077-2>https://doi.org/10.1038/s41467-021-26077-2</a>',
            'Stairs C.W., Táborski P., Kolisko M., Pánek T., Eme L., Hradilová M., Vlček C., Jerlström-Hultqvist J., Roger A.J. and Čepička I. (2021) Anaeramoebae are a deeply divergent lineage of eukaryotes that clarify the transition from anaerobic mitochondria to hydrogenosomes. Curr. Biol. 31: 5605-5612',
            'Tice AK, Žihala D, Pánek T, Jones RE, Salomaki E, Nenarokov S, Burki F, Eliáš M, Eme L, Roger A.J., Rokas A, Shen X, Strassert JFH, Kolísko M, Brown MW. (2021). PhyloFisher: A phylogenomic package for resolving eukaryotic relationships. PLoS Biol. <a href=https://doi.org/10.1371/journal.pbio.3001365>https://doi.org/10.1371/journal.pbio.3001365</a>',
            'Pipaliya S., Santos R., Salas-Leiva D., Balmer E.A., Wirdnam C.D., Roger A.J., Hehl A.B., Faso, C. and Dacks J.B. (2021) Unexpected organellar locations of ESCRT machinery in Giardia intestinalis and complex evolutionary dynamics spanning the transition to parasitism in the lineage Fornicata. BMC Biol. <a href=https://doi.org/10.1186/s12915-021-01077-2>https://doi.org/10.1186/s12915-021-01077-2</a>',
            'Susko E., Steel, M. and Roger A.J. (2021) Conditions under which distributions of edge length ratios on phylogenetic trees can be used to order evolutionary events. J. Theor. Biol. 526:110788',
            'Zhang, T., Li C., Zhang Z., Wang C., Roger A.J. and Gao F. (2021) Characterization and comparative analyses of mitochondrial genomes in single-celled eukaryotes to shed light on the diversity and evolution of linear molecular architecture. Int. J. Mol. Sci. 22:2546',
            'Susko E. and Roger, A.J.  (2021) Long branch attraction biases in phylogenetics. Syst. Biol. 70:838-843',
            'Žárský V., Klimeš V., Pačes J., Vlček C., Hradilová M., Beneš V., Nývltová E., Hrdý I., Pyrih J., Mach J., Barlow L., Stairs C.W., Eme L., Hall N., Eliáš M., Dacks J.B., Roger A.J. and Tachezy J. (2021) The Mastigamoeba balamuthi genome and the nature of the free-living ancestor of Entamoeba. Mol. Biol. Evol. (in press) <a href=https://doi.org/10.1093/molbev/msab020>https://doi.org/10.1093/molbev/msab020</a>'
        ],
        2020: [
            'Gray M.W., Burger, G, Derelle R., Klimeš V, Leger M.M., Sarrasin M., Vlček C., Roger A.J., Eliáš M., Lang B.F. (2020) The draft nuclear genome sequence and predicted mitochondrial proteome of Andalucia godoyi, a protist with the most gene-rich and bacteria-like mitochondrial genome. BMC Biol. 18: 22 <a href=https://doi.org/10.1186/s12915-020-0741-6>https://doi.org/10.1186/s12915-020-0741-6</a>',
            'Susko E. and Roger A.J. (2020) On the use of information criteria for model selection in phylogenetics. Mol. Biol. Evol. 37: 549-562.'
        ],
        2019: [
            'Karnkowska A., Treitli S.C., Brzoň O., Novák L., Vacek V., Soukal P., Barlow L.D., Herman E.K., Pipaliya S., Pánek T., Žihala D., Petrželková R., Butenko A., Eme L., Stairs C.W., Roger A.J., Eliáš M., Dacks J.B. and Hampl V. (2019) The oxymonad genome displays canonical eukaryotic complexity in the absence of a mitochondrion. Mol. Biol. Evol. 36: 2292-2312.',
            'Hess S., Eme L., Roger A.J. and Simpson A.G.B. (2019) A natural toroidal microswimmer propelled by a rotary eukaryotic flagellum. Nat. Microbiol. 4: 1620-1626.',
            'Wang H.-C., Susko E. and Roger A.J. (2019) The relative importance of modeling site pattern heterogeneity versus partition-wise heterotachy in phylogenomic inference. Syst. Biol. 68: 1003-1019.',
            'Muñoz-Gómez S.A., Hess S., Burger G., Lang B.F., Susko E., Slamovits C.H. and Roger A.J. (2019) An updated phylogeny of the Alphaproteobacteria reveals that the parasitic Rickettsiales and Holosporales have independent origins. eLife, Feb. 25; 8. pii: e42535.'
        ],
        2018: [
            'Cenci U., Sibbald S.J., Curtis B.A., Kamikawa R., Eme L., Moog D., Henrissat B., Maréchal E., Chabi M., Djemiel C., Roger A.J., Kim E. and Archibald J.M. (2018) Nuclear genome sequence of the plastid-lacking cryptomonad Goniomonas avonlea provides insights in the evolution of secondary plastids. BMC Biol. 16: 137.',
            'Pyrihová E., Motycková A., Voleman L., Wandyszewska N., Fišer R., Seydlová G., Roger A.J., Kolísko M. and Doležal P. (2018) A single tim translocase in the mitosomes of Giardia intestinalis illustrates convergence of protein import machines in anaerobic eukaryotes. Genome Biol. Evol. 10: 2813-2822.',
            'Lax G., Eglit Y., Eme L., Bertrand E.M., Roger A.J. and Simpson A.G.B. (2018) Hemimastigophora is a novel supra-kingdom-level lineage of eukaryotes. Nature 564: 410-414.',
            'Roger A.J. and Susko E. (2018) Molecular clocks provide little information to date methanogenic archaea. Nature Ecol. Evol. 2: 1676-1677.',
            'Stairs C.W., Eme L., Muñoz-Gómez S., Cohen A., Dellaire G., Shepherd J.N., Fawcett J.P. and Roger A.J. (2018) Microbial eukaryotes have adapted to hypoxia by horizontal acquisitions of a gene involved in rhodoquinone biosynthesis. eLife 7: e34292.',
            'Susko E., Lincker L. and Roger A.J. (2018) Accelerated estimation of frequency classes in site-heterogeneous profile mixture models. Mol. Biol. Evol. 35: 1266-1283.',
            'Heiss A.A., Kolisko M., Ekelund F., Brown M.W., Roger A.J. and Simpson A.G. (2018) Combined morphological and phylogenomic re-examination of malawimonads, a critical taxon for inferring the evolutionary history of eukaryotes. Roy. Soc. Open Sci. 5: 171707.',
            'Brown M.W., Heiss A.A., Kamikawa R., Inagaki Y., Yabuki A., Tice A.K., Shiratori T., Ishida K.I., Hashimoto T., Simpson A.G.B. and Roger A.J. (2018) Phylogenomics places orphan protistan lineages in a novel eukaryotic super-group. Genome Biol. Evol. 10: 427-433.',
            'Wang H.-C., Minh B.Q., Susko E. and Roger A.J. (2018) Modeling site heterogeneity with posterior mean site frequency profiles accelerates accurate phylogenomic estimation. Syst. Biol. 67: 216-235.'
        ],
        2017: [
            'Gentekaki E., Curtis B.A., Stairs C.W., Klimes V., Elias M., Salas-Leiva D.E., Herman E.K., Eme L., Arias M.C., Henrissat B., Hilliou F., Klute M.J., Suga H., Malik S.-B., Pightling A.W., Kolisko M., Rachubinski R.A., Schlacht A., Soanes D.M., Tsaousis A.D., Archibald J.M., Ball S.G., Dacks J.B., Clark C.G., van der Giezen M. and Roger A.J. (2017) Extreme genome diversity in the hyper-prevalent parasitic eukaryote Blastocystis. PLoS Biol. 15: S.',
            'Harding T., Roger A.J. and Simpson A.G.B. (2017) Adaptations to high salt in a halophilic protist: differential expression and gene acquisitions through duplications and gene transfers. Front Microbiol. 8: 944.',
            'Kang S., Tice A.K., Spiegel F.W., Silberman J.D., Pánek T., Cepicka I., Kostka M., Kosakyan A., Alcântara D.M., Roger A.J., Shadwick L.L., Smirnov A., Kudryavstev A., Lahr D.J.G. and Brown M.W. (2017) Between a pod and a hard test: the deep evolution of amoebae. Mol. Biol. Evol. 34: 2258-2270.',
            'Takishita K., Chikaraishi Y., Tanifuji G., Ohkouchi N., Hashimoto T., Fujikura K. and Roger A.J. (2017) Microbial eukaryotes that lack sterols. J. Euk. Microbiol. 64: 897-900.',
            'Yang J., Harding T., Kamikawa R., Simpson A.G.B. and Roger A.J. (2017) Mitochondrial genome evolution and a novel RNA editing system in deep-branching heteroloboseids. Genome Biol. Evol. 9: 1161-1174.',
            'Leger M.M., Kolisko M., Kamikawa R., Stairs C.W., Kume K., Čepicka I., Silberman J.D., Andersson J.O., Xu F., Yabuki A., Eme L., Zhang Q., Takishita K., Inagaki Y., Simpson A.G.B., Hashimoto T. and Roger A.J. (2017) Organelles that illuminate the origins of Trichomonas hydrogenosomes and Giardia mitosomes. Nature Ecol. Evol. 1: 0092.',
            'Eme L., Gentekaki E., Curtis B., Archibald J.M. and Roger A.J. (2017) Lateral gene transfer in the adaptation of the anaerobic parasite Blastocystis to the gut. Curr. Biol. 27: 807-820.',
            'Pánek T., Žihala D., Sokol M., Derelle R., Klimeš V., Hradilová M., Zadrobílková E., Susko E., Roger A.J., Cepǐcka I. and Eliáš M. (2017). Nuclear genetic codes with a different meaning of the UAG and the UAA condon. BMC Biol. 15: 8.',
            'Muñoz-Gómez S.A., Wideman J.G., Roger A.J. and Slamovits C.H. (2017) The origin of mitochondrial cristae from alphaproteobacteria. Mol. Biol. Evol. 34: 943-956.'
        ],
        2016: [
            'Novák L., Zubáčová Z., Karnkowska A., Kolisko M., Hroudová M., Stairs C.W., Simpson A.G., Keeling P.J., Roger A.J., Čepička I. and Hampl V. (2016) Arginine deiminase pathway enzymes: evolutionary history in metamonads and other eukaryotes. BMC Evol. Biol. 16: 197.',
            'Pyrih J., Martincova E., Kolísko M., Stojanovová D., Basu S., Harant K., Haindrich A.C., Lukeš J., Roger A.J. and Tachezy J. (2016) Minimal cytosolic iron-sulfur cluster assembly machinery of Giardia intestinalis is partially associated with mitosomes. Mol. Microbiol. 102: 701-714.',
            'Wang H., Susko E. and Roger A.J. (2016) Split-specific bootstrap measures for quantifying phylogenetic stability and the influence of taxon selection. Mol. Phylogenet. Evol. 105: 114-125.',
            'Gawryluk R., Kamikawa R., Stairs C.W., Brown M.W., Silberman J.D. and Roger A.J. (2016) The earliest stages of mitochondrial adaptation to low oxygen revealed in a novel rhizarian. Curr. Biol. 26: 2729-2738.',
            'Xu F., Jerlström-Hultqvist J., Kolisko M., Simpson A.G., Roger A.J., Svärd S.G. and Andersson J.O. (2016) On the reversibility of parasitism: adaptation to a free-living lifestyle via gene acquisitions in the diplomonad Trepomonas sp. PC1. BMC Biol. 14: 62. [Erratum in BMC Biol. (2016) 14: 77].',
            'Leger M.M., Eme L., Hug L.A. and Roger A.J. (2016) Novel hydrogenosomes in the microaerophilic jakobid Stygiella incarcerata. Mol. Biol. Evol. 33: 2318-2336. [Corrigendum correction in Mol. Biol. Evol. Feb. 2, 2017; doi: <a href=https://doi.org/10.1093/molbev/msx059>10.1093/molbev/msx059</a>].',
            'Harding T., Brown M.W., Simpson A.G.B. and Roger A.J. (2016) Osmoadaptative strategy and its molecular signature in obligately halophilic heterotrophic protists. Genome Biol. Evol. 8: 2241-2258.',
            'Hamann E., Gruber-Vodicka H., Kleiner M., Tegetmeyer H., Riedel D., Littmann S., Chen J., Milucka J., Viehweger B., Becker K., Dong X., Stairs C.W., Hinrichs K., Brown M.W., Roger A.J. and Strous M. (2016) Environmental Breviatea harbor mutualistic Arcobacter epibionts. Nature 534: 254-258.',
            'Karnkowska A., Vacek V., Zubáčová Z., Treitli S.C., Petrželková R., Eme L., Novák L., Žárský V., Barlow L.D., Herman E.K., Soukal P., Hroudová M., Doležal P., Stairs C.W., Roger A.J., Eliáš M., Dacks J.B., Vlček Č. and Hampl V. (2016) A eukaryote without a mitochondrial organelle. Curr. Biol. 26: 1274-1284.',
            'Kamikawa R., Shiratori T., Ishida K., Miyashita H. and Roger A.J. (2016) Group II intron-mediated trans-splicing in the gene-rich mitochondrial genome of an enigmatic eukaryote, Diphylleia rotans. Genome Biol. Evol. 8: 458-466.',
            'Pánek T., Zadrobílková E., Walker G., Brown M.W., Gentekaki E., Hroudová M., Kang S., Roger A.J., Tice A.K., Vlček Č. and Čepička I. (2016) First multigene analysis of Archamoebae robustly reveals its phylogeny and shows that Entamoebidae represents a deep lineage of the group. Mol. Phylogenet. Evol. 98: 41-51.'
        ],
        2015: [
            'Torruella G., de Mendoza A., Grau-Bové X., Antó M., Chaplin M.A., Del Campo J., Eme L., Pérez-Cordón G., Whipps C.M., Nichols K.M., Paley R., Roger A.J., Sitjà-Bobadilla A., Donachie S. and Ruiz-Trillo I. (2015) Phylogenomics reveals convergent evolution of lifestyles in close relatives of animals and fungi. Curr. Biol. 25: 2404-2410.',
            'Stairs C.W., Leger M.M. and Roger A.J. (2015) Diversity and origins of anaerobic metabolism in mitochondria and related organelles. Philos. Trans. R. Soc. Lond. B. Biol. Sci. 370: 20140326.',
            'Gawryluk R., Eme L. and Roger A.J. (2015) Gene fusion, fission, lateral transfer, and loss: not-so-rare events in the evolution of eukaryotic ATP citrate lyase. Mol. Phylogenet. Evol. 91: 12-16.',
            'Leger M.M., Petrů M., Žárský V., Eme L., Vlček Č., Harding T., Lang B.F., Eliáš M., Doležal P. and Roger A.J. (2015) An ancestral bacterial division system is widespread in eukaryotic mitochondria. Proc. Natl. Acad. Sci. USA 112: 10239-46.',
            'Nývltová E., Stairs C.W., Hrdý I., Rídl J., Mach J., Pačes J., Roger A.J. and Tachezy J. (2015) Lateral gene transfer and gene duplication played a key role in the evolution of Mastigamoeba balamuthi hydrogenosomes. Mol. Biol. Evol. 32: 1039-55.'
        ],
        2014: [
            'Eme L., Sharpe S.C., Brown M.W. and Roger A.J. (2014) On the age of eukaryotes:  evaluating evidence from fossils and molecular clocks. Cold Spring Harb. Perspect. Biol. 6: pii: a016139.',
            'Klimeš V., Gentekaki E., Roger A.J., and Eliáš M. (2014) A large number of nuclear genes in the human parasite Blastocystis require mRNA polyadenylation to create functional termination codons. Genome Biol. Evol. 6: 1956-1961.',
            'Tanifuji G., Onodera N.T., Brown M.W., Curtis B.A., Roger A.J., Wong G., Melkonian M. and Archibald J.M. (2014) Nucleomorph and plastid genome sequences of the chlorarachniophyte Lotharella oceanica: convergent reductive evolution and frequent recombination in nucleomorph-bearing algae. BMC Genomics 15: 374.',
            'Gentekaki E., Kolisko M., Boscaro V., Bright K.J., Dini F., Di Giuseppe G., Gong Y., Miceli C., Modeo L., Molestina R.E,. Petroni G., Pucciarelli S., Roger A.J., Strom, S.L. and Lynn, DH. (2014)  Large-scale phylogenomic analysis reveals the phylogenetic position of the problematic taxon Protocruzia and unravels the deep phylogenetic affinities of the ciliate lineages. Mol. Phylogenet. Evol. 78C: 36-42.',
            'Stairs C.W., Eme L., Brown M.W., Mutsaers C., Susko E. Dellaire G., Soanes D.M., van der Giezen M. and Roger A.J. (2014) A SUF Fe-S cluster biogenesis system in the mitochondrion-related organelles of the anaerobic protist Pygsuia. Curr. Biol. 24: 1176-1186.',
            'Wang H.-C., Susko E. and Roger A.J. (2014) An amino acid substitution-selection model adjusts residue fitness to improve phylogenetic estimation. Mol. Biol. Evol. 31: 779-792.',
            'Kamikawa R., Kolisko M., Nishimura Y., Yabuki A., Brown M.W., Ishikawa S.A., Ishida K., Roger A.J., Hashimoto T. and Inagaki Y. (2014) Gene content evolution in discobid mitochondria deduced from the phylogenetic position and complete mitochondrial genome of Tsukubamonas globosa. Genome Biol. Evol. 6:306-15.',
            'Tsaousis A.D., Gentekaki E., Eme L., Gaston D. and Roger A.J. (2014) Evolution of the cytosolic iron-sulfur cluster assembly machinery in Blastocystis sp. and other microbial eukaryotes. Eukaryot. Cell 13: 143-153.',
        ],
        2013: [
            'Suga H., Chen Z., de Mendoza A.,  Sebé-Pedrós A., Brown M.W., Kramer E., Carr M., Kerner P., Vervoort M., Sánchez-Pons N., Torruella G., Derelle R., Manning G., Lang B.F., Russ C., Haas B.J., Roger A.J., Nusbaum C. and Ruiz-Trillo I. (2013) The Capsaspora genome reveals a complex unicellular prehistory of animals. Nat. Communications 4: 2325.',
            'Brown M.W., Sharpe S.C., Silberman J.D., Heiss A.A., Lang B.F., Simpson A.G. and Roger A.J. (2013) Phylogenomics demonstrates that breviate flagellates are related to opisthokonts and apusomonads. Proc. Roy. Soc. Biol. Sci. 280: 20131755.',
            'Leger M.M., Gawryluk R.M., Gray M.W. and Roger A.J. (2013) Evidence for a hydrogenosomal-type ATP generation pathway in Acanthamoeba castellanii. PLoS ONE 8: e69532.',
            'Gaston D. and Roger A.J. (2013) Functional divergence and convergent evolution in the plastid-targeted glyceraldehyde-3-phosphate dehydrogenases of diverse eukaryotic algae. PLoS ONE 8: e7039.',
            'Kamikawa R., Brown M.W., Nishimura Y., Sako Y., Heiss A.A., Yubuki N., Gawryluk R., Simpson A.G.B., Roger A.J., Hashimoto T. and Inagaki Y. (2013) Parallel re-modeling of EF-1 function: divergent EF-1 genes co-occur with EFL genes in diverse distantly related eukaryotes. BMC Evol. Biol. 13:131.',
            'Wang H.-C., Susko E. and Roger A.J. (2013) The site-wise log-likelihood score is a good predictor of genes under positive selection. J. Mol. Evol. 76: 280-294.',
            'O’Malley M.A., Simpson A.G.B. and Roger A.J. (2013) The other eukaryotes in light of evolutionary protistology. Biol. Philos. 28: 299-330.',
            'Harding T., Brown M.W., Plotnikov A., Selivanova E., Park J.S., Gunderson J.H., Baumgartner M., Silberman J.D., Roger A.J. and Simpson A.G.B. (2013) Amoeba stages in the deepest branching heteroloboseans, including Pharyngomonas: Evolutionary and systematic implications. Protist 164: 272-286.',
            'Susko E. and Roger A.J. (2013) Problems with estimation of ancestral frequencies under stationary models. Syst. Biol. 62: 330-338.'
        ],
        2012: [
            'Tsaousis A.D., Ollagnier de Choudens S., Gentekaki E., Long S., Gaston D., Stechmann A., Vinella D., Py B., Fontecave M., Barras F., Lukeš J. and Roger A.J. (2012) Evolution of Fe/S cluster biogenesis in the anaerobic parasite Blastocystis. Proc. Natl. Acad. Sci. USA 109: 10426-10431.',
            'Brown M.W., Kolisko M., Silberman J.D. and Roger A.J. (2012) Aggregative multicellularity evolved independently in the eukaryotic supergroup Rhizaria. Curr. Biol. 22:1123-1127.',
            'Liberles D., Teichmann S., Bahar I., Bastolla U., Bloom J., Bornberg-Bauer E., Colwell L., de Koning J., Dokholyan N., Echave J., Elofsson A., Gerloff D., Goldstein R., Grahnen J., Holder M., Lakner C., Lartillot N., Lovell S., Naylor G., Perica T., Pollock D., Pupko T., Regan L., Roger A.J., Rubinstein N., Shakhnovich E., Sjölander K., Sunyaev S., Teufel A., Thorne J., Thornton J., Weinreich D., Whelan S. (2012) The interface of protein structure, protein biophysics, and molecular evolution. Protein Sci. 21:769-785.',
            'Zou L., Susko E., Field C. and Roger A.J. (2012) Fitting nonstationary general-time-reversible models to obtain edge-lengths and frequencies for the Barry-Hartigan Model. Syst. Biol. 61: 927-40.',
            'Takishita K., Kolisko M., Komatsuzaki H., Yabuki A., Inagaki Y., Cepicka I., Smejkalová P., Silberman J.D., Hashimoto T., Roger A.J. and Simpson A.G. (2012) Multigene phylogenies of diverse Carpediemonas-like organisms identify the closest relatives of \'Amitochondriate\' Diplomonads and Retortamonads. Protist 163: 344-55.',
            'Susko E. and Roger A.J. (2012) The probability of correctly resolving a split as an experimental design criterion in phylogenetics. Syst. Biol. 61: 811-821.',
            'Takishita K., Chikaraishi Y., Leger M.M., Kim E., Yabuki A., Ohkouchi N. and Roger A.J. (2012) Lateral transfer of tetrahymenol-synthesizing genes has allowed multiple diverse eukaryote lineages to independently adapt to environments without oxygen. Biol. Direct 7: 5',
            'Torruella G., Derelle R., Paps J., Lang B.F., Roger A.J., Shalchian-Tabrizi K. and Ruiz-Trillo I. (2012) Phylogenetic relationships within the Opisthokonta based on phylogenomic analyses of conserved single copy protein domains. Mol. Biol. Evol. 29: 531-544.'
        ],
        2011: [
            'Gaston D., Susko E. and Roger A.J. (2011) A phylogenetic mixture model for the identification of functionally divergent protein residues. Bioinformatics 27: 2655-2663.',
            'Hampl V., Stairs C.W. and Roger A.J. (2011) The tangled past of eukaryotic enzymes involved in anaerobic metabolism. Mobile Genet. Elements 3: 71-74.',
            'Kamikawa R., Inagaki Y., Roger A.J. and Hashimoto T. (2011) Splintrons in Giardia intestinalis:  Spliceosomal introns in a split form. Commun. Integr. Biol. 4: 454-456.',
            'Long S., Changmai P., Tsaousis A.D., Skalický T., Verner Z., Wen Y.Z., Roger A.J. and Lukeš J. (2011) Stage-specific requirement for Isa1 and Isa2 proteins in the mitochondrion of Trypanosoma brucei and heterologous rescue by human and Blastocystis orthologues. Mol. Microbiol. 81: 1403-1418.',
            'Stairs C.W., Roger A.J. and Hampl V. (2011) Eukaryotic pyruvate formate lyase and its activating enzyme were acquired laterally from a firmicute. Mol. Biol. Evol. 28: 2087-2099.',
            'Zou L., Susko E., Field C. and Roger A.J. (2011) The Parameters of the Barry and Hartigan general Markov model are statistically nonidentifiable. Syst. Biol. 60: 872-875.',
            'Wang H.-C., Susko E. and Roger A.J. (2011) Fast statistical tests for detecting heterotachy in protein evolution. Mol. Biol. Evol. 28: 2305-2315.',
            'Kamikawa R., Inagaki Y., Tokoro M., Roger A.J. and Hashimoto T. (2011) Split introns in the genome of a divergent eukaryote Giardia intestinalis are excised by spliceosome-mediated trans-splicing. Curr. Biol. 21: 311-315.',
            'Tsaousis A.D., Gaston D., Stechmann A., Walker P.B., Lithgow T. and Roger A.J. (2011) A functional Tom70 in the human parasite Blastocystis sp.: Implications for the evolution of the mitochondrial import apparatus. Mol. Biol. Evol. 28: 781-791.'
        ],
        2010: [
            'Barberà M.J., Ruiz-Trillo I., Tufts J.Y.A., Bery A., Silberman J.D. and Roger A.J. (2010) Sawyeria marylandensis (Heterolobosea) has a hydrogenosome with novel metabolic properties. Eukaryot. Cell 9: 1913-1924.',
            'Sebé-Pedros A., Roger A.J., Lang F.B., King N. and Ruiz-Trillo I. (2010) From the cover: Ancient origin of the integrin-mediated adhesion and signaling machinery.  Proc. Natl. Acad. Sci. USA 107: 10142-10147.',
            'Baurain D., Brinkmann H., Petersen, J. Rodríguez-Ezpeleta N., Stechmann A., Demoulin V., Roger A.J., Burger G., Lang B.F. and Philippe H. (2010) Phylogenomic evidence for separate acquisition of plastids in cryptophytes, haptophytes and stramenopiles. Mol. Biol. Evol. 27: 1698-1709.',
            'Kolisko M., Silberman J.D., Cepicka I., Yubuki N., Takishita K., Yabuki A., Leander B.S., Inouye I., Inagaki Y., Roger A.J. and Simpson A.G.B. (2010) A wide diversity of previously undetected free-living relatives of diplomonads isolated from marine/saline habitats. Env. Microbiol. 12: 2700-2710.',
            'Hug L.A., Stechmann A. and Roger A.J. (2010) Phylogenetic distributions and histories of proteins involved in anaerobic pyruvate metabolism in eukaryotes. Mol. Biol. Evol. 27:311-324.'
        ],
        2009: [
            'Blouin C., Perry S., Lavell A., Susko E. and Roger A.J. (2009) Reproducing the manual annotation of multiple sequence alignment using a SVM classifier. Bioinformatics 25: 3093-3098.',
            'Wang H.-C., Susko E. and Roger A.J. (2009) PROCOV: maximum likelihood estimation of protein phylogeny under covarion models and site-specific covarion pattern analysis. BMC Evol. Biol. 9: 225.',
            'Kamikawa R., Sanchez-Perez G.F., Sako Y., Roger A.J. and Inagaki Y. (2009) Expanded phylogenies of canonical and non-canonical types of methionine adenosyltransferase reveal a complex history of these gene families in eukaryotes. Mol. Phylogenet. Evol. 53:565-570.',
            'Hampl V., Hug L.A., Leigh J.W., Dacks J.B., Lang B.F., Simpson A.G.B. and Roger A.J.  (2009) Phylogenomic analyses support the monophyly of Excavata and resolve relationships among eukaryotic “supergroups”. Proc. Natl. Acad. Sci. USA 106: 3859-3864.'
        ],
        2008: [
            'Wang H.-C., Li K.M., Susko E. and Roger A.J. (2008) A class frequency mixture model that adjusts for site-specific amino acid frequencies and improves inference of protein phylogeny. BMC Evol. Biol. 8:331.',
            'Sanchez-Perez G., Hampl V., Simpson A.G.B. and Roger A.J. (2008) A new divergent type of eukaryotic methionine adenosyltransferase that has spread by gene transfer between secondary algae. J. Euk. Microbiol. 55: 374-381.',
            'Hamblin K., Standley D.M., Rogers M.B., Stechmann A., Roger A.J., Maytum R. and van der Giezen M. (2008) Localization and nucleotide specificity of Blastocystis succinyl-CoA synthetase. Mol. Microbiol. 68: 1395-1405.',
            'Kolisko M., Cepicka I., Hampl V., Leigh J., Roger A.J., Kulda J., Simpson A.G.B. and Flegr J. (2008) Molecular phylogeny of diplomonads and enteromonads based on SSU rRNA, α-tubulin and HSP90 genes: implications for the evolutionary history of the double karyomastigont of diplomonads. BMC Evol. Biol. 8: 205.',
            'Hampl V., Silberman J.D., Stechmann A., Diaz-Triviño S., Johnson P.J. and Roger A.J. (2008) Genetic evidence for a mitochondriate ancestry in the amitochondriate flagellate Trimastix pyriformis. PLoS ONE 3:e1383.',
            'Stechmann A., Hamblin K., Perez-Brocal V., Gaston D., Richmond G.S., van der Giezen M., Clark C.G. and Roger A.J. (2008) Organelles in Blastocystis that blur the distinction between mitochondria and hydrogenosomes. Curr. Biol. 18: 580-585.',
            'Ruiz-Trillo I., Roger A.J., Burger G., Gray M.W. and Lang B.F. (2008) A phylogenomic investigation into the origin of Metazoa. Mol. Biol. Evol. 25: 664-672.',
            'Wang H.-C., Susko E., Spencer M. and Roger A.J. (2008) Topological estimation biases with covarion evolution. J. Mol. Evol. 66: 50-60.',
            'Leigh J., Susko E., Baumgartner M. and Roger A.J. (2008) Testing congruence in phylogenomic analysis. Syst. Biol. 57: 104-115.',
            'Wu J. Susko E. and Roger A.J. (2008) An independent heterotachy model and its implications for phylogeny and divergence time estimation. Mol. Phylogenet. Evol. 46: 801-806.'
        ],
        2007: [
            'Gill E.E., Diaz-Triviño S., Barberà M.J., Silberman J.D., Stechmann A., Gaston D., Tamas I. and Roger A.J. (2007) Novel mitochondrion-related organelles with a unique array of functions in the anaerobic amoeba Mastigamoeba balamuthi. Mol. Microbiol. 66:1306-1320.',
            'Rodriguez-Ezpeleta N., Brinkmann H., Burger G., Roger A.J., Gray M.W., Philippe H. and Lang B.F. (2007). Toward resolving the eukaryotic tree: the phylogenetic position of jakobids and cercozoans. Curr. Biol. 17:1420-1425.',
            'Susko E. and Roger A.J. (2007) On reduced amino acid alphabets for phylogenetic inference. Mol. Biol. Evol. 24:2139-2150.',
            'Hug L.A. and Roger A.J. (2007) The impact of fossils and taxon sampling on ancient molecular dating analyses. Mol. Biol. Evol. 24:1889-1897.',
            'Andersson J.O., Sjogren Å., Horner D.S., Murphy C.A., Dyal P., Svärd S., Logsdon J.M., Ragan M.A., Hirt R.P., and Roger A.J. (2007) A genomic survey of the fish parasite Spironucleus salmonicida indicates genomic plasticity among diplomonads and significant lateral gene transfer in eukaryote genome evolution. BMC Genomics 8:51.',
            'Pepke S., Butt D., Nadeau I., Roger A.J. and Blouin C. (2007) Using confidence set heuristics during topology search improves the robustness of phylogenetic inference. J. Mol. Evol. 64:80-89.',
            'Spencer M., Susko E. and Roger A.J. (2007) Modelling prokaryote gene content. Evol. Bioinform. Online, 2:157-178.',
            'Wang H.C., Spencer M., Susko E. and Roger A.J. (2007) Testing for covarion-like evolution in protein sequences. Mol. Biol. Evol. 24:294-305.'
        ],
        2006: [
            'Goddard M., Leigh J., Roger A.J. and Pemberton A.J. (2006) Invasion and persistence of a selfish gene in the Cnidaria. PLoS ONE 1:e3.',
            'Stechmann A., Baumgartner M., Silberman J.D. and Roger A.J. (2006) The glycolytic pathway of Trimastix pyriformis is an evolutionary mosaic. BMC Evol. Biol. 6:101.',
            'Ruiz-Trillo I., Lane C., Archibald J.M. and Roger A.J. (2006) Insights into the evolutionary origin and genome architecture of the unicellular opisthokonts Capsaspora owczarzaki and Sphaeroforma arctica. J. Euk. Microbiol. 53:379-384.',
            'Inagaki Y. and Roger A.J. (2006) Phylogenetic estimation under codon models can be biased by codon usage heterogeneity. Mol. Phylogenet. Evol. 40:428-434.',
            'Andersson J.O., Hirt R.P., Foster P.G. and Roger A.J. (2006) Evolution of four gene families with patchy phylogenetic distributions: influx of genes into protist genomes. BMC Evol. Biol. 6:27.',
            'Wang H.C., Susko E. and Roger A.J. (2006) On the correlation between genomic G+C content and optimal growth temperature in prokaryotes: data quality and confounding factors. Biochem Biophys Res Commun. 342:681-684.',
            'Simpson A.G.B, Inagaki Y. and Roger A.J. (2006) Comprehensive multigene phylogenies of excavate protists reveal the evolutionary positions of ‘primitive’ eukaryotes.  Mol. Biol. Evol. 23:615-625.',
            'Inagaki Y., Susko E. and Roger A.J. (2006) Recombination between elongation factor 1α genes from distantly-related archaeal lineages. Proc. Natl. Acad. Sci. USA 103:4528-4533.'
        ],
        2005: [
            'Susko E., Spencer M. and Roger A.J. (2005) Biases in phylogenetic estimation can be caused by random sequence segments. J. Mol. Evol. 61:351-359.',
            'Butt D., Roger A.J. and Blouin C. (2005) libcov: a C++ bioinformatic library to manipulate protein structures, sequence alignments and phylogeny. BMC Bioinf. 6:138.',
            'Spencer M., Susko E. and Roger A.J. (2005) Likelihood, parsimony and heterogeneous evolution. Mol. Biol. Evol. 22:1161-1164.',
            'Blouin C., Butt D. and Roger A.J. (2005) The impact of taxon sampling on the estimation of rates of evolution at sites. Mol. Biol. Evol. 22:784-791.',
            'Andersson J.O., Sarchfield S. and Roger A.J. (2005) Gene transfers from Nanoarchaeota to an ancestor of diplomonads and parabasalids. Mol. Biol. Evol. 22:85-90.'
        ],
        2004: [
            'Simpson A.G.B., Gill E.E., Callahan H.A., Litaker R.W. and Roger A.J. (2004) Early evolution within kinetoplastids (euglenozoa), and the late emergence of trypanosomatids. Protist 155:407-422.',
            'Ruiz-Trillo I., Inagaki Y., Davis L.A., Sperstad S., Landfald B. and Roger A.J. (2004) Capsaspora owczarzaki is an independent opisthokont lineage. Curr. Biol. 14:R946-R947.',
            'Susko E., Inagaki Y. and Roger A.J. (2004) On inconsistency of the neighbor-joining, least squares, and minimum evolution estimation when substitution processes are incorrectly modeled. Mol. Biol. Evol. 21:1629-1642.',
            'Inagaki Y., Susko E., Fast N.M. and Roger A.J. (2004) Covarion shifts cause a long-branch attraction artifact that unites Microsporidia and Archaebacteria in EF-1α phylogenies. Mol. Biol. Evol. 21:1340-1349.',
            'Susko E. and Roger A.J. (2004) Estimating and comparing the rates of gene discovery and expressed sequence tag (EST) frequencies from EST surveys. Bioinformatics 20: 2279-2287.',
            'Blouin C., Butt D. and Roger A.J. (2004) Rapid evolution in conformational space: a study of loop regions in a ubiquitous GTP-binding domain. Prot. Sci. 13:608-616.',
            'Inagaki Y., Simpson A.G.B., Dacks J. and Roger A.J. (2004) Phylogenetic artifacts can be caused by leucine, serine and arginine codon usage heterogeneity: dinoflagellate plastid origins as a case study. Syst. Biol. 53:582-593',
            'Silberman J.D., Collins A.G., Gershwin L.-A., Johnson P.J. and Roger A.J. (2004) Ellobiopsidae of the genus Thallasomyces are alveolates. J. Euk. Microbiol. 51:246-252.'
        ],
        2003: [
            'Simpson A.G.B. and Roger A.J. (2003) Protein phylogenies robustly resolve the deep-level relationships within Euglenozoa. Mol. Phylogenet. Evol. 30:201-212.',
            'Susko E., Field C., Blouin C. and Roger A.J. (2003) Estimation of rates-across-sites distributions in phylogenetic substitution models. Syst. Biol. 52:594-603.',
            'Dacks J.B., Davis L.A.M., Sjögren Å.M., Andersson J.O., Roger A.J. and Doolittle W.F. (2003) Evidence for Golgi bodies in proposed \'Golgi-lacking\' lineages. Proc. Roy. Soc. Lond. B 270 (Suppl. 2): S168-S171.',
            'Shan Y., Milios E., Roger A., Blouin C. and Susko E. (2003) Automatic recognition of regions of intrinsically poor multiple alignment using machine learning. Proceedings of the 2003 IEEE Bioinformatics Conference (CSB2003), pp. 482-483.',
            'Inagaki Y., Blouin C., Susko E., and Roger A.J. (2003) Assessing functional divergence in EF-1 α and its paralogs in eukaryotes and archaebacteria. Nucleic Acids Research 31:4227-4237.',
            'Andersson J.O. and Roger A.J. (2003) Evolution of glutamate dehydrogenase genes: lateral gene transfer within and between prokaryotes and eukaryotes. BMC Evol. Biol. 3:13.',
            'Andersson J.O., Sjögren Å.M., Davis L.A.M., Embley T.M. and Roger A.J. (2003) Phylogenetic analyses of diplomonad genes reveal frequent lateral gene transfers affecting eukaryotes. Curr. Biol. 13:94-104.',
            'Blouin C., Boucher Y. and Roger A.J. (2003) Inferring functional constraints and divergence in protein families using 3D mapping of phylogenetic information. Nucleic Acids Res. 31: 790-797.'
        ],
        2002: [
            'Simpson A.G.B., MacQuarrie E. and Roger A.J. (2002) Early origin of canonical introns. (Brief Communication) Nature 419:270.',
            'Susko E., Inagaki Y., Field C., Holder M.E. and Roger A.J. (2002) Testing for differences in rates across sites distributions in phylogenetic subtrees. Mol. Biol. Evol. 19:1514-1523.',
            'Simpson A.G.B., Roger A.J., Silberman J.D., Leipe D., Edgcomb V.E., Jermiin L.S. Patterson D.J. and Sogin M.L. (2002) Molecular phylogenies reveal a novel close relative for diplomonads, the excavate taxon Carpediemonas. Mol. Biol. Evol. 19:1782-1791.',
            'Simpson A.G.B., Lukes J. and Roger A.J. (2002) The evolutionary history of kinetoplastids and their kinetoplasts. Mol. Biol. Evol. 19:2071-2083.',
            'Archibald J.M. and Roger A.J. (2002) Gene conversion and the evolution of euryarchaeal chaperonins: a maximum likelihood-based method for detecting conflicting phylogenetic signal. J. Mol. Evol. 55:232-245.',
            'Silberman J.D., Simpson A.G.B., Kulda J., Cepicka I., Hampl V., Johnson P.J. and Roger A.J. (2002) Retortamonad flagellates are closely related to diplomonads – implications for the history of mitochondrial function in eukaryote evolution. Mol. Biol. Evol. 19:777-786.',
            'Inagaki Y., Doolittle W.F., Baldauf S.L. and Roger A.J. (2002) Lateral transfer of an EF-1 gene: Origin and evolution of the large subunit of ATP sulfurylase in eubacteria. Curr. Biol. 12:1-20.',
            'Andersson J.O. and Roger A.J. (2002a) Evolutionary analysis of the small subunit of glutamate synthase: Gene order conservation, gene fusions and prokaryote-to-eukaryote lateral gene transfers. Euk. Cell. 1:304-310.',
            'Andersson J.O. and Roger A.J. (2002b) A cyanobacterial gene in non-photosynthetic protists – an early chloroplast acquisition in eukaryotes? Curr. Biol. 12:115-119.',
            'Archibald J.M. and Roger A.J. (2002) Gene duplication and gene conversion shape the evolution of archaeal chaperonins. J. Mol. Biol. 316:1041-1050.',
            'Inagaki Y., Blouin C., Doolittle W.F. and Roger A.J. (2002) Convergence and constraint in eukaryotic release factor 1 (eRF1) domain 1: The evolution of stop codon specificity. Nucl. Acids Res. 30:532-544.',
        ],
        2001: [
            'Morrison H.G., Roger A.J., Nystul T. G., Gillin F.D. and Sogin M.L. (2001) Giardia lamblia expresses a proteobacterial-like DnaK homolog. Mol. Biol. Evol. 18:530-541.',
            'Edgcomb V.P.*, Roger A.J.*,  Simpson A.G.B., Kysela D.T. and Sogin M.L. (2001) Evolutionary relationships among "jakobid" flagellates as indicated by alpha- and beta-tubulin phylogenies. Mol. Biol. Evol. 18:514-522 (*co-first authors). '
        ],
        2000: [
            'Baldauf S.L., Roger A.J., Wenk-Siefert I. and Doolittle W. F. (2000) A kingdom-level phylogeny of eukaryotes based on combined protein data. Science 290:972-977.'
        ],
        1999: [
            'Roger A.J., Morrison H.G. and Sogin M.L. (1999) Primary structure and phylogenetic relationships of a malate dehydrogenase gene from Giardia lamblia. J. Mol. Evol. 48:750-755.',
            'Dacks J. and Roger A.J. (1999) The first sexual lineage and the relevance of facultative sex. J. Mol. Evol. 48: 779-783.',
            'Duncan R., Faggart M.A., Roger A.J. and Cornell N.W. (1999) Phylogenetic analysis of the 5-aminolevulinate synthase gene. Mol. Biol. Evol. 16: 383-396.',
            'Roger A.J., Sandblom O., Doolittle W.F. and Philippe H. (1999) An evaluation of elongation factor 1 as a phylogenetic marker for eukaryotes. Mol. Biol. Evol. 16: 218-233.'
        ],
        1998: [
            'Edgcomb V.P., Viscogliosi E., Simpson A.G.B., Delgado-Viscogliosi P., Roger A.J., and Sogin M.L. (1998) New insights into the phylogeny of trichomonads inferred from small subunit rRNA sequences. Protist 149: 359-366.',
            'Beaton M.J., Roger A.J. and Cavalier-Smith T. (1998) Sequence analysis of the mitochondrial genome of Sarcophyton glaucum: conserved gene order among octocorals. J. Mol. Evol. 47: 697-708.',
            'Fast N.M., Roger A.J., Richardson C. and Doolittle W.F. (1998) U2 and U6 snRNA genes from the microsporidian Nosema locustae:  Evidence for a functional spliceosome. Nucl. Acids Res. 26: 3202-3207.',
            'Roger A.J., Svärd S.G., Tovar J., Clark C.G., Smith M.W., Gillin F.D. and Sogin M.L. (1998) A mitochondrial-like chaperonin 60 gene in Giardia  lamblia:  Evidence that diplomonads once harbored an endosymbiont related to the progenitor of mitochondria. Proc. Natl. Acad. Sci. USA 95: 229-234.',
            'Wagner M., Roger A.J., Flax J.L., Brusseau G.A. and Stahl D.A. (1998) Phylogeny of dissimilatory sulfite reductases supports an early origin of sulfate respiration. J. Bacteriol. 180: 2975-2982.'
        ]
    };

    const namesToBold = [
        "Roger A.J."
    ].sort((a, b) => b.length - a.length);

    const namesToBoldAndItalicize = [
        "bioRxiv",
        "Syst. Biol.",
        "J. Cell Sci.",
        "Curr. Biol.",
        "J. Euk. Microbiol.",
        "Nat. Microbiol.",
        "Nature",
        "mBio",
        "Mol. Phylogenet. Evol.",
        "Mol. Biol. Evol.",
        "Mol. Microbiol.",
        "Nat. Communications",
        "Micro. Gen.",
        "Proc. Natl. Acad. Sci.",
        "Parasites & Vectors",
        "Nucleic Acids Res.",
        "Nat. Ecol. Evol.",
        "PLoS Biol.",
        "BMC Biol.",
        "BMC Evol. Biol.",
        "BMC Genomics",
        "J. Theor. Biol.",
        "Int. J. Mol.",
        "eLife",
        "Genome Biol. Evol.",
        "Nature Ecol. Evol.",
        "Roy. Soc. Open Sci.",
        "Front Microbiol.",
        "B. Biol. Sci.",
        "Cold Spring Harb. Perspect. Biol.",
        "Eukaryot. Cell",
        "Proc. Roy. Soc. Biol. Sci.",
        "PLoS ONE",
        "J. Mol. Evol.",
        "Biol. Philos.",
        "Protist",
        "Protein Sci.",
        "Biol. Direct",
        "Mobile Genet. Elements",
        "Commun. Integr. Biol.",
        "Bioinformatics",
        "Env. Microbiol.",
        "Evol. Bioinform.",
        "Biochem Biophys Res Commun.",
        "BMC Bioinf.",
        "Prot. Sci.",
        "Nucleic Acids Research",
        "Proceedings of the 2003 IEEE Bioinformatics Conference (CSB2003)",
        "Proc. Roy. Soc. Lond.",
        "Euk. Cell.",
        "J. Mol. Biol.",
        "Nucl. Acids Res.",
        "Science",
        "J. Bacteriol."
    ].sort((a, b) => b.length - a.length);

    const startYear = 2026;
    const endYear = 1998;
    const container = document.getElementById("publications-by-year");

    function escapeRegExp(string) {
        return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    }

    function wrapMatches(text, phrases, replacementFn) {
        let result = text;
        for (const phrase of phrases) {
            const pattern = new RegExp(escapeRegExp(phrase), "g");
            result = result.replace(pattern, replacementFn(phrase));
        }
        return result;
    }

    function formatPublication(text) {
        let result = text;

        result = wrapMatches(result, namesToBoldAndItalicize, phrase =>
            `<strong><em>${phrase}</em></strong>`
        );

        result = wrapMatches(result, namesToBold, phrase =>
            `<strong>${phrase}</strong>`
        );

        return result;
    }

    const allYears = [];
    for (let year = startYear; year >= endYear; year--) {
        allYears.push(year);
    }

    let totalPublications = 0;
    for (const year of allYears) {
        totalPublications += (publications[year] || []).length;
    }

    let currentNumber = totalPublications;

    for (const year of allYears) {
        const pubs = publications[year] || [];

        const details = document.createElement("details");
        details.className = "collapsible";

        const summary = document.createElement("summary");
        summary.textContent = String(year);
        details.appendChild(summary);

        if (pubs.length > 0) {
            const content = document.createElement("div");
            content.className = "collapsible-content";

            const ol = document.createElement("ol");
            ol.className = "publication-list";

            for (const pub of pubs) {
                const li = document.createElement("li");
                li.innerHTML = `
                    <span class="publication-number">${currentNumber}.</span>
                    <span class="publication-text">${formatPublication(pub)}</span>
                `;
                ol.appendChild(li);
                currentNumber--;
            }

            content.appendChild(ol);
            details.appendChild(content);
        }

        container.appendChild(details);
    }
});