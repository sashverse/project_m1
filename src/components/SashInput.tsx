const SashInput = (props: any) => {
    const { btnLabel, width } = props;
    return (
        <>
            <input className={`w-${width}`} type="text" /><span className="text-blue-900">{btnLabel}</span>
        </>
    )
};

export default SashInput;