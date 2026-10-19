import StatCard from "./StatCard";

export default function Stats({stars, downloads, issues}) {

    return (
        <>
            <div className="flex justify-center gap-6 pb-8">
                <StatCard label="Stars" value={stars} />
                <StatCard label="Downloads" value={downloads} />
                <StatCard label="Issues reported" value={issues} />
            </div>
        </>
    );
}