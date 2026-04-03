document.addEventListener("DOMContentLoaded", () => {
    const publications = {
        2026: [
            'Boisard J., Williams S.K., Roger A.J. and Stairs C.W. (2026) CoMR: an integrative scoring pipeline for comprehensive mitochondrial proteome reconstruction across eukaryotes. bioRxiv: <a href="https://doi.org/10.64898/2026.02.20.707009">https://doi.org/10.64898/2026.02.20.707009</a>',
            'Yi. Z., Williams S.K., Leger M.M., Brask N., Salas-Leiva D., Silberman J.D., Eglit Y., Simpson A.G.B., Roger A.J., Stairs C.W. (2026) Divergent trajectories for anaerobic mitochondrial evolution in breviate protists. bioRxiv: <a href="https://doi.org/10.64898/2026.01.29.702055">https://doi.org/10.64898/2026.01.29.702055</a>',
            'Susko E., Lanfear R. and Roger A.J. (2026) Comparing partition and mixture models with Akaike Information Criteria. Syst. Biol. <a href=https://doi.org/10.1093/sysbio/syag013>https://doi.org/10.1093/sysbio/syag013</a>',
            'Raas W.D., Van Hooff J.J.E., Lukeš J., Richards T.A., Roger, A.J., Wickstead B., Kops G.J.P.L., Snel B. and Tromer E.C. (2026) The LECA had a conventional kinetochore and the kinetoplastid kinetochore is a derived feature—a critical evaluation of Akiyoshi, 2025. J. Cell Sci. 139: jcs264452',
            'McCarthy C.G.P., Susko E. and Roger A.J. (2026) Modeling site-and-branch heterogeneity with GFmix.  Syst. Biol. (under review) see: <a href=https://www.biorxiv.org/content/10.1101/2025.08.07.669136v1.abstract>https://www.biorxiv.org/content/10.1101/2025.08.07.669136v1.abstract</a>',
        ],
        2025: [
            'Author A., Roger A.J., Shao J.D. (2025) Example publication title. <i>Journal Name</i> 12:34-56.'
        ]
    };

    const namesToUnderline = [
        "Williams S.K.",
        "Shao J.D.",
        "McCarthy C.G.P."
    ].sort((a, b) => b.length - a.length);

    const namesToBold = [
        "Roger A.J."

    ].sort((a, b) => b.length - a.length);

    const namesToBoldAndItalicize = [
        "bioRxiv",
        "Syst. Biol.",
        "J. Cell Sci."
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