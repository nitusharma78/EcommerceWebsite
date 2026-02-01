const SubmitButtonComponent = ({ onSubmit, label }) => {
    return (
        <button
            type="submit"
            className="w-full py-2 font-semibold text-white transition bg-blue-600 rounded-lg hover:bg-blue-700"
            onClick={onSubmit}
        >
            {label}
        </button>
    );
}