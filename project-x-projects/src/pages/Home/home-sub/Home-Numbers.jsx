/* NUMBERS IMAGES */
import impactImg from '../../../assets/numbers/impact-img.jpg';

export default function HomeNumbers(){
    const stats = [
        {
            label: "WELLS BUILT",
            value: "40+",
            desc: "Hand-pump and electric wells across seven countries",
        },
        {
            label: "COMMUNITIES SERVED",
            value: "10",
            desc: "Countries where we work and build",
        },
        {
            label: "FAMILIES SUPPORTED",
            value: "1000+",
            desc: "Orphans, widows, and those facing hardship",
        },
    ];

    return(
        <main>
            {/* NUMBERS THAT MATTER */}
            <section className="numbersSection" aria-label="Numbers that matter">
                <div className="container">
                    
                    <header className="numbersHeader">
                        <div className="numbersEyebrow">Impact</div>
                        <h2 className="numbersTitle">NUMBERS THAT MATTER</h2>
                        <p className="numbersSub">Real work, real results, real people helped.</p>
                    </header>

                    <div className="numbersGrid">
                        <div className="numbersStack">
                            {stats.map((s) => (
                                <article className="numbersCard" key={s.label}>
                                    <div className="numbersLabel">{s.label}</div>
                                    <div className="numbersValue">{s.value}</div>
                                    <div className="numbersDivider" />
                                    <p className="numbersDesc">{s.desc}</p>
                                </article>
                            ))}
                        </div>

                        <div className="numbersMedia" aria-label="Impact image">
                            <img className="numbersMediaImg" src={impactImg} alt="Impact in the field" />
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
}