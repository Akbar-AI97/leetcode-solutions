// Greedy approach based on Chebyshev distance: max(|x₂ − x₁|, |y₂ − y₁|)
// Interview answer: “This problem is solved using a greedy approach based on the Chebyshev distance, since diagonal moves allow reducing both coordinates simultaneously.”


function minTimeToVisitAllPoints(points: number[][]): number {
    let time: number = 0;

    for (let i = 1; i < points.length; i++) {
        const dx = Math.abs(points[i][0] - points[i-1][0]);
        const dy = Math.abs(points[i][1] - points[i-1][1]);
        time += Math.max(dx, dy)
    }
    return time;
};



let result: number;
result = minTimeToVisitAllPoints([[1,1],[3,4],[-1,0]]);
console.log(result);


