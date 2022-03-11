// 计算播放量
export default function () {
    
    const countNumber = (num: number) => {
        return (num / 10000).toFixed(0)
    }
    return {
        countNumber
    }
}
