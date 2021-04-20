export default interface GeneralScale {
    name: string;
    scale: Scale[];
};

export interface Scale {
    position: number;
    note: string;
    suffix: string;
}