package main

import (
	"context"
	"log"
	"net"

	// ඔබේ මොඩියුල් නාමය සහ pb ෆෝල්ඩර් එක නිවැරදිව Import කරගැනීම
	"go-worker/pb"

	"google.golang.org/grpc"
)

// server ව්‍යුහය (Struct) නිර්මාණය කිරීම සහ pb හි ඇති UnimplementedDataProcessorServer එක ඇතුළත් කිරීම
type server struct {
	pb.UnimplementedDataProcessorServer
}

// ProcessCSV ශ්‍රිතය (Method) සැබෑවටම ක්‍රියාත්මක වන ආකාරය (Implementation)
func (s *server) ProcessCSV(ctx context.Context, req *pb.FileRequest) (*pb.JobResponse, error) {
	log.Printf("📥 නව CSV ගොනුවක් ලැබුණා! File Path: %s | User ID: %s", req.GetFilePath(), req.GetUserId())

	// TODO: ඉදිරියට මෙතනට සැබෑ CSV Processing සහ Kintone API / Bulk Update ලොජික් එක එකතු වේ.
	// දැනට අපි සාර්ථකව ජොබ් එකක් ක්‍රියාත්මක වුණු බවට Mock Response එකක් යවමු.
	return &pb.JobResponse{
		JobId:            "job_prod_99x_" + req.GetUserId(),
		Status:           "PROCESSING",
		RecordsProcessed: 150, // සාම්පලයක් ලෙස රෙකෝඩ්ස් 150ක්
	}, nil
}

func main() {
	// gRPC සර්වර් එක දුවන්න අවශ්‍ය Port එක (50051) සවන් දීමට (Listen) සූදානම් කිරීම
	lis, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("❌ Port 50051 එකට සවන් දීමට අපොහොසත් වුණා: %v", err)
	}

	// අලුත් gRPC සර්වර් ඉන්ස්ටන්ස් එකක් සෑදීම
	grpcServer := grpc.NewServer()

	// අපේ සර්වර් එක gRPC පද්ධතිය තුළ නිල වශයෙන් ලියාපදිංචි (Register) කිරීම
	pb.RegisterDataProcessorServer(grpcServer, &server{})

	log.Println("🚀 Go Worker gRPC Server එක Port :50051 හරහා සාර්ථකව සක්‍රීය වුණා...")

	// සර්වර් එක ධාවනය කිරීම
	if err := grpcServer.Serve(lis); err != nil {
		log.Fatalf("❌ gRPC සර්වර් එක ක්‍රියාත්මක කිරීමට අපොහොසත් වුණා: %v", err)
	}
}
