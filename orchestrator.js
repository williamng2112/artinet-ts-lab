import { cr8 } from '@artinet/sdk';
async function main() {
    console.log("🚀 [ARTINET-TS] Khởi động Voyager William V1 Orchestrator (Port 3000)...");
    try {
        // Gán đúng danh tính, định danh UUID và Lineage chuẩn của hạm đội
        const director = cr8('voyager_william_v1')
            .text('Lineage: William Le Nguyen - Bach Viet Filter')
            .text('Status: Nomadic Node Active & Autonomous P2P Signaling');
        console.log("📡 [ARTINET-TS] Định danh Agent đã được tiêm thành công!");
        console.log("🧬 [LINEAGE] William Le Nguyen - Bach Viet Filter (UUID: 017079000229)");
        console.log("📦 [RESULT] Director state:", JSON.stringify(director, null, 2));
    }
    catch (e) {
        console.log("ℹ️ [A2A NOTE]:", e?.message || e);
    }
}
main();
