import { ContentError } from "../Types/Types";

export const ErrorDisplay = ({ error }: { error: ContentError; }) => {
    return (
        <div>
            <div>{error.Message}</div>
            <div>{error.Data}</div>
        </div>
    );
};