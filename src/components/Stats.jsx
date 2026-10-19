import StatCard from "./StatCard";

export default function Stats({stars, downloads, issues}) {

    return (
        <>
            <div className="flex justify-center gap-6 pb-8">
                <StatCard title="Stars" value={stars} />
                <StatCard title="Downloads" value={downloads} />
                <StatCard title="Issues reported" value={issues} />
            </div>
        </>
    );
}