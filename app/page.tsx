import { ArrowDownRight, ArrowUpRight, BookOpen, Code2, Dna, GraduationCap, Mail, MapPin } from 'lucide-react';

const publications = [
  { index: '[1]', venue: 'Cell · 2026', title: 'Human acrocentric chromosome short-arm de novo mutation and recombination', authors: <><strong>Lin J.</strong>, Mastrorosa F. K., Noyes M. D., Yoo D., Rhie A., Porubsky D., … &amp; Eichler E. E.*</>, href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
  { index: '[2]', venue: 'medRxiv · 2026 · Under review', title: 'A high-resolution human pangenome structural variant resource for improved disease association', authors: <><strong>Lin J.</strong>, Gustafson J. A., Wertz J., Sui Y., Yoo D., Porubsky D., Luo C., Wong I., Garimella K. V., … &amp; Eichler E. E.*</>, href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
  { index: '[3]', venue: 'Nature Methods · 2022', title: 'SVision: a deep learning approach to resolve complex structural variants', authors: <><strong>Lin J.</strong>, Wang S., Audano P. A., Meng D., Flores J. I., Kosters W., Yang X., Jia P., Marschall T., Beck C. R., Ye K.*</>, href: 'https://www.nature.com/articles/s41592-022-01609-w' },
  { index: '[4]', venue: 'Briefings in Bioinformatics · 2023', title: 'Comparison and benchmark of structural variants detected from long read and long read assembly', authors: <><strong>Lin J.</strong>, Jia P., Wang S., Kosters W., Ye K.*</>, href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
  { index: '[5]', venue: 'Genomics, Proteomics & Bioinformatics · 2022', title: 'Mako: A Graph-based Pattern Growth Approach to Detect Complex Structural Variants', authors: <><strong>Lin J.</strong>, Yang X., Kosters W., Xu T., Jia Y., Wang S., Zhu Q., Ryan M., Guo L., Zhang C., Lee C., … &amp; Ye K.*</>, href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
  { index: '[6]', venue: 'Nature Communications · 2026', title: 'HRCHY-CytoCommunity identifies hierarchical tissue organization in cell-type spatial maps', authors: <>Xie R., Wang Z., Liu J., Xu H., Xu Y., <strong>Lin J.*</strong>, Hu Y.*, Gao L.*</>, href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
  { index: '[7]', venue: 'Nature Biotechnology · 2024', title: 'De novo and somatic structural variant discovery with SVision-pro', authors: <>Wang S., <strong>Lin J.</strong>, Jia P., Xu T., Li X., Liu Y., Ye K.*</>, href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
  { index: '[8]', venue: 'Nature Communications · 2026', title: 'Using the linear references from the pangenome to discover missing autism variants', authors: <>Sui Y., <strong>Lin J.</strong>, Noyes M. D., Kwon Y., Wong I., Koundinya N., … &amp; Eichler E. E.*</>, href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
];
const projects = [
  { mark: 'SV', name: 'SVision', description: 'Deep-learning methods for resolving complex structural variants from long-read sequencing.', href: 'https://github.com/xjtu-omics/SVision', meta: 'Python · 100+ stars' },
  { mark: 'MK', name: 'Mako', description: 'Graph-based pattern growth for discovering complex structural variation.', href: 'https://github.com/xjtu-omics/Mako', meta: 'Java · Open source' },
  { mark: '1K', name: '1KG Long-read SV', description: 'Population-scale structural variant discovery using long-read sequencing.', href: 'https://github.com/jiadong324/1KG_LongRead_SV', meta: 'Python · 1000 Genomes' },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <span aria-hidden="true" />
      <div className="nav-links"><a href="#research">Research</a><a href="#publications">Publications</a><a href="#software">Software</a></div>
    </nav>
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <h1>Jiadong<br /><em>Lin</em></h1>
        <p className="lede">I develop computational tools and machine-learning models to reveal structural variation and connect genome structure with molecular and cellular states.</p>
        <div className="hero-actions"><a className="button primary" href="#publications">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href="https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en">Google Scholar <ArrowUpRight size={15} /></a></div>
      </div>
      <aside className="profile-card" aria-label="Profile summary">
        <div className="portrait-wrap"><img src="/jdlin.jpg" alt="Jiadong Lin with his daughter in front of blooming roses" className="portrait" /></div>
        <div className="profile-body"><p className="kicker">Current appointment</p><h2>Postdoctoral Fellow</h2><p>Department of Genome Sciences<br />University of Washington</p><div className="profile-links"><a href="https://github.com/jiadong324" aria-label="GitHub profile"><Code2 size={18} /></a><a href="mailto:jdlin@uw.edu" aria-label="Email Jiadong Lin"><Mail size={18} /></a></div></div>
      </aside>
    </section>
    <section className="ticker" aria-label="Research themes"><div>Structural variation <Dna size={20} /> Long-read sequencing <Dna size={20} /> Pangenomics <Dna size={20} /> Machine-learning models</div></section>
    <section className="section shell research" id="research">
      <div className="section-label"><span>01</span> Research</div>
      <div className="section-content two-col"><div><p className="kicker">What I study</p><h2>Making the hidden genome <em>visible.</em></h2></div><div className="research-copy"><p>My work sits at the intersection of algorithm design, human genetics, long-read sequencing, and multi-omics. I build computational tools and machine-learning models that reveal how genome structure shapes molecular and cellular states.</p><div className="focus-grid"><div><strong>01</strong><h3>Haplotype-resolved multi-omics</h3><p>Machine-learning models for haplotype-resolved multi-omics.</p></div><div><strong>02</strong><h3>Structure-conditioned functional models</h3><p>Linking genome structure to molecular and cellular states.</p></div><div><strong>03</strong><h3>Complex structural variation</h3><p>Scalable detection and representation of complex structural variations.</p></div><div><strong>04</strong><h3>Robust variant detection</h3><p>Efficient structural variant detection under sparse and mixed data.</p></div></div></div></div>
    </section>
    <section className="section publications" id="publications"><div className="shell">
      <div className="section-label"><span>02</span> Selected publications</div>
      <div className="publication-heading"><h2>Recent &amp; selected <em>work</em></h2><a className="text-link" href="https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en">View all on Scholar <ArrowUpRight size={15} /></a></div>
      <div className="publication-list">{publications.map((publication) => <a className="publication-row" href={publication.href} key={publication.title}><div className="pub-year">{publication.index}</div><div className="pub-copy"><span>{publication.venue}</span><h3>{publication.title}</h3><p>{publication.authors}</p></div><ArrowUpRight className="pub-arrow" size={22} /></a>)}</div>
    </div></section>
    <section className="section shell" id="software">
      <div className="section-label"><span>03</span> Open-source software</div><div className="software-heading"><h2>Tools built for <em>discovery.</em></h2><p>Research software and reproducible workflows for the genomics community.<br /><a className="inline-link" href="https://github.com/jiadong324">View all GitHub repositories <ArrowUpRight size={14} /></a></p></div>
      <div className="project-grid">{projects.map((project) => <a className="project-card" href={project.href} key={project.name}><div className="project-top"><span className="project-mark">{project.mark}</span><ArrowUpRight size={20} /></div><h3>{project.name}</h3><p>{project.description}</p><span className="project-meta">{project.meta}</span></a>)}</div>
    </section>
    <section className="credentials shell"><div className="credential"><GraduationCap size={21} /><div><span>Dual Ph.D.</span><strong>Xi&apos;an Jiaotong University · Leiden University</strong></div></div><div className="credential"><MapPin size={21} /><div><span>Based in</span><strong>Seattle, Washington</strong></div></div><div className="credential"><BookOpen size={21} /><div><span>Affiliation</span><a href="https://eichler.gs.washington.edu/"><strong>Eichler Lab · UW Genome Sciences</strong></a></div></div></section>
  </main>;
}
