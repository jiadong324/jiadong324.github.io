import { ArrowDownRight, ArrowUpRight, BookOpen, Code2, Dna, GraduationCap, Mail, MapPin } from 'lucide-react';

const publications = [
  { year: '2026', venue: 'Nature Communications', title: 'Using the linear references from the pangenome to discover missing autism variants', authors: 'Yang Sui, Jiadong Lin, Michelle D. Noyes, et al.', href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
  { year: '2023', venue: 'Briefings in Bioinformatics', title: 'Comparison and benchmark of structural variants detected from long read and long-read assembly', authors: 'Jiadong Lin et al.', href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
  { year: '2022', venue: 'Nature Methods', title: 'SVision: a deep learning approach to resolve complex structural variants', authors: 'Jiadong Lin et al.', href: 'https://www.nature.com/articles/s41592-022-01609-w' },
  { year: '2022', venue: 'Genomics, Proteomics & Bioinformatics', title: 'Mako: A graph-based pattern growth approach to detect complex structural variants', authors: 'Jiadong Lin et al.', href: 'https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en' },
];
const projects = [
  { mark: 'SV', name: 'SVision', description: 'Deep-learning methods for resolving complex structural variants from long-read sequencing.', href: 'https://github.com/xjtu-omics/SVision', meta: 'Python · 100+ stars' },
  { mark: 'MK', name: 'Mako', description: 'Graph-based pattern growth for discovering complex structural variation.', href: 'https://github.com/xjtu-omics/Mako', meta: 'Java · Open source' },
  { mark: '1K', name: '1KG Long-read SV', description: 'Population-scale structural variant discovery using long-read sequencing.', href: 'https://github.com/jiadong324/1KG_LongRead_SV', meta: 'Python · 1000 Genomes' },
];

export default function Home() {
  return <main>
    <nav className="nav shell" aria-label="Main navigation">
      <a className="monogram" href="#top" aria-label="Jiadong Lin — home">JL<span>.</span></a>
      <div className="nav-links"><a href="#research">Research</a><a href="#publications">Publications</a><a href="#software">Software</a></div>
      <a className="nav-contact" href="mailto:jdlin@uw.edu">Get in touch <ArrowUpRight size={15} /></a>
    </nav>
    <section className="hero shell" id="top">
      <div className="hero-copy">
        <div className="eyebrow"><span /> Computational genomics · Seattle, WA</div>
        <h1>Jiadong<br /><em>Lin</em></h1>
        <p className="lede">I develop algorithms to reveal structural variation in the human genome—especially in regions that are complex, diverse, and difficult to map.</p>
        <div className="hero-actions"><a className="button primary" href="#publications">Explore my work <ArrowDownRight size={17} /></a><a className="text-link" href="https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en">Google Scholar <ArrowUpRight size={15} /></a></div>
      </div>
      <aside className="profile-card" aria-label="Profile summary">
        <div className="portrait-wrap"><img src="https://avatars.githubusercontent.com/u/15797884?v=4" alt="Jiadong Lin" className="portrait" /><span className="available">Open to collaboration</span></div>
        <div className="profile-body"><p className="kicker">Current appointment</p><h2>Postdoctoral Fellow</h2><p>Department of Genome Sciences<br />University of Washington</p><div className="profile-links"><a href="https://github.com/jiadong324" aria-label="GitHub profile"><Code2 size={18} /></a><a href="https://orcid.org/0000-0002-8116-5901" aria-label="ORCID profile" className="orcid">iD</a><a href="mailto:jdlin@uw.edu" aria-label="Email Jiadong Lin"><Mail size={18} /></a></div></div>
      </aside>
    </section>
    <section className="ticker" aria-label="Research themes"><div>Structural variation <Dna size={18} /> Long-read sequencing <Dna size={18} /> Pangenomics <Dna size={18} /> Human genetics</div></section>
    <section className="section shell research" id="research">
      <div className="section-label"><span>01</span> Research</div>
      <div className="section-content two-col"><div><p className="kicker">What I study</p><h2>Making the hidden genome <em>visible.</em></h2></div><div className="research-copy"><p>My work sits at the intersection of algorithm design, human genetics, and long-read sequencing. I build computational methods that help us observe variation missed by conventional references and short-read technologies.</p><div className="focus-grid"><div><strong>01</strong><h3>Variant discovery</h3><p>Detecting complex and population-scale structural variation.</p></div><div><strong>02</strong><h3>Pangenome methods</h3><p>Using diverse references to recover previously hidden variation.</p></div><div><strong>03</strong><h3>Genome informatics</h3><p>Turning long-read data into robust, reproducible resources.</p></div></div></div></div>
    </section>
    <section className="section publications" id="publications"><div className="shell">
      <div className="section-label"><span>02</span> Selected publications</div>
      <div className="publication-heading"><h2>Recent &amp; selected <em>work</em></h2><a className="text-link" href="https://scholar.google.com/citations?user=YeX_MDwAAAAJ&hl=en">View all on Scholar <ArrowUpRight size={15} /></a></div>
      <div className="publication-list">{publications.map((publication) => <a className="publication-row" href={publication.href} key={publication.title}><div className="pub-year">{publication.year}</div><div className="pub-copy"><span>{publication.venue}</span><h3>{publication.title}</h3><p>{publication.authors}</p></div><ArrowUpRight className="pub-arrow" size={22} /></a>)}</div>
    </div></section>
    <section className="section shell" id="software">
      <div className="section-label"><span>03</span> Open-source software</div><div className="software-heading"><h2>Tools built for <em>discovery.</em></h2><p>Research software and reproducible workflows for the genomics community.</p></div>
      <div className="project-grid">{projects.map((project) => <a className="project-card" href={project.href} key={project.name}><div className="project-top"><span className="project-mark">{project.mark}</span><ArrowUpRight size={20} /></div><h3>{project.name}</h3><p>{project.description}</p><span className="project-meta">{project.meta}</span></a>)}</div>
    </section>
    <section className="credentials shell"><div className="credential"><GraduationCap size={21} /><div><span>Dual Ph.D.</span><strong>Xi&apos;an Jiaotong University · Leiden University</strong></div></div><div className="credential"><MapPin size={21} /><div><span>Based in</span><strong>Seattle, Washington</strong></div></div><div className="credential"><BookOpen size={21} /><div><span>Affiliation</span><strong>Eichler Lab · UW Genome Sciences</strong></div></div></section>
    <footer><div className="shell footer-inner"><div className="footer-contact"><a href="mailto:jdlin@uw.edu">jdlin@uw.edu <ArrowUpRight size={18} /></a><p>Research collaborations, software questions,<br />and scientific conversations are welcome.</p></div></div><div className="shell footer-bottom"><span>© {new Date().getFullYear()} Jiadong Lin</span><span>Seattle, WA · Pacific Time</span><a href="#top">Back to top ↑</a></div></footer>
  </main>;
}
