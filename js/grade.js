export const bands = [ 
    { min: 85,  label: "HD" }, 
    { min: 75,  label: "D" }, 
    { min: 65,  label: "C" }, 
    { min: 50,  label: "P" },        
    { min: 0,   label: "F"}
 ];

        export function gradeFromMark(mark){ 
            const m = Number(mark);
            if (Number.isNaN(m) || m < 0 || m > 100) return null; 
            return bands.find(b => m >= b.min).label;
         }