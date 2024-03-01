import { useRouter } from "next/router"
import LiveScore from "@/components/TestLiveScore"

const [match] = () => {
    const router = useRouter();
  const { match } = router.query;

  return (
    <div><LiveScoreDetails match={match} /></div>
  )
}

export default [match]