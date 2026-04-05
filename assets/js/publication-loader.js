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
            'Gallot-Lavallée L., Jerlström-Hultqvist J., Salas-Leiva D.E., Stairs C.W., Čepička I., Roger A.J. and Archibald J.M. (2023) Massive intein content in Anaeramoeba reveals new aspects of intein mobility in eukaryotes. Proc. Natl Acad. Sci. USA 120: e2306381120',
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
        ]
    };

    const namesToUnderline = [
        "Williams S.K.",
        "McCarthy C.G.P.",
        "Harada R.",
        "Williamson K.",
        "Baños H",
        "Muñoz-Gómez S.A.",
        "Zhao D.",
        "Salas-Leiva D.E.",
        "Shao J.D.",
        "Daneau J.",
        "Jerlström-Hultqvist J.",
        "Gallot-Lavallée L.",
        "Harding T.",
        "Leger M.M.",
        "Stairs C.W.",
        "Hess S.",
        "Eme L.",
        "Wang H.-C.",
        "Sibbald S.J.",
        "Curtis B.A.",
        "Curtis B.",
        "Yang J.",
        "Kolisko M."
    ].sort((a, b) => b.length - a.length);

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
        "Nat. Communications",
        "Micro. Gen.",
        "Proc. Natl Acad. Sci.",
        "Parasites & Vectors",
        "Nucleic Acids Res.",
        "Nat. Ecol. Evol.",
        "PLoS Biol.",
        "BMC Biol.",
        "J. Theor. Biol.",
        "Int. J. Mol.",
        "eLife",
        "Genome Biol. Evol.",
        "Nature Ecol. Evol.",
        "Roy. Soc. Open Sci.",
        "Front Microbiol."
    ].sort((a, b) => b.length - a.length);

    const startYear = 2026;
    const endYear = 1993;
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

        result = wrapMatches(result, namesToUnderline, phrase =>
            `<u>${phrase}</u>`
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