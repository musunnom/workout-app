import { useState, useEffect } from "react"
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts"

function App() {
  const workoutPlan = {
    monday: [
      {
        name: "덤벨 스쿼트",
        reps: "15회",
        sets: 3,
        image:
          "/images/덤벨스쿼트.png",
      },
      {
        name: "덤벨 런지",
        reps: "12회",
        sets: 3,
        image:
          "/images/덤벨런지.png",
      },
      {
        name: "루마니안 데드리프트",
        reps: "12회",
        sets: 3,
        image:
          "/images/루마니안데드리프트.png",
      },
      {
        name: "테이블 스텝업",
        reps: "15회",
        sets: 3,
        image:
          "/images/테이블스텝업.png",
      },
      {
        name: "플랭크",
        reps: "45초",
        sets: 3,
        image:
          "/images/플랭크.png",
      },
      {
  name: "레그레이즈",
  reps: "15회",
  sets: 3,
  image: "/images/레그레이즈.png",
},
    ],

    tuesday: [
      {
        name: "덤벨 로우",
        reps: "12회",
        sets: 3,
        image:
          "/images/덤벨로우.png",
      },
      {
        name: "숄더 프레스",
        reps: "12회",
        sets: 3,
        image:
          "/images/숄더프레스.png",
      },
      {
        name: "사이드 레터럴 레이즈",
        reps: "15회",
        sets: 3,
        image:
          "/images/사이드레터럴레이즈.png",
      },
      {
  name: "덤벨 컬",
  reps: "12회",
  sets: 3,
  image: "/images/덤벨컬.png",
},
{
  name: "킥백",
  reps: "12회",
  sets: 3,
  image: "/images/킥백.png",
},
      {
        name: "버드독",
        reps: "15회",
        sets: 3,
        image:
          "/images/버드독.png",
      },
    ],

    wednesday: [
      {
        name: "버피",
        reps: "10회",
        sets: 3,
        image:
          "/images/버피.png",
      },
      {
        name: "마운틴 클라이머",
        reps: "30초",
        sets: 3,
        image:
          "/images/마운틴클라이머.png",
      },
      {
        name: "니업",
        reps: "20회",
        sets: 3,
        image:
          "/images/니업.png",
      },
      {
  name: "점핑잭",
  reps: "30초",
  sets: 3,
  image: "/images/점핑잭.png",
},
{
  name: "스쿼트 점프",
  reps: "15회",
  sets: 3,
  image: "/images/스쿼트점프.png",
},
{
  name: "플러터 킥",
  reps: "30초",
  sets: 3,
  image: "/images/플러터킥.png",
},
    ],

    thursday: [
      {
        name: "푸쉬업",
        reps: "12회",
        sets: 3,
        image:
          "/images/푸쉬업.png",
      },
      {
        name: "덤벨 컬",
        reps: "12회",
        sets: 3,
        image:
          "/images/덤벨컬.png",
      },
      {
        name: "킥백",
        reps: "12회",
        sets: 3,
        image:
          "/images/킥백.png",
      },
      {
  name: "체어 딥스",
  reps: "15회",
  sets: 3,
  image: "/images/체어딥스.png",
},
{
  name: "인클라인 푸쉬업",
  reps: "15회",
  sets: 3,
  image: "/images/인클라인푸쉬업.png",
},
{
  name: "숄더 탭",
  reps: "20회",
  sets: 3,
  image: "/images/숄더탭.png",
},
    ],

    friday: [
      {
        name: "힙브릿지",
        reps: "20회",
        sets: 3,
        image:
          "/images/힙브릿지.png",
      },
      {
        name: "카프레이즈",
        reps: "20회",
        sets: 3,
        image:
          "/images/카프레이즈.png",
      },
      {
        name: "월싯",
        reps: "45초",
        sets: 3,
        image:
          "/images/월싯.png",
      },
      {
  name: "스모 스쿼트",
  reps: "15회",
  sets: 3,
  image: "/images/스모스쿼트.png",
},
{
  name: "사이드 런지",
  reps: "12회",
  sets: 3,
  image: "/images/사이드런지.png",
},
{
  name: "글루트 킥백",
  reps: "15회",
  sets: 3,
  image: "/images/글루트킥백.png",
},
    ],

    saturday: [
      {
        name: "사이드 플랭크",
        reps: "30초",
        sets: 3,
        image:
          "/images/사이드플랭크.png",
      },
      {
        name: "크런치",
        reps: "20회",
        sets: 3,
        image:
          "/images/크런치.png",
      },
      {
        name: "러시안 트위스트",
        reps: "20회",
        sets: 3,
        image:
          "/images/러시안트위스트.png",
      },
      {
  name: "바이시클 크런치",
  reps: "20회",
  sets: 3,
  image: "/images/바이시클크런치.png",
},
{
  name: "데드버그",
  reps: "15회",
  sets: 3,
  image: "/images/데드버그.png",
},
{
  name: "플러터 킥",
  reps: "30초",
  sets: 3,
  image: "/images/플러터킥.png",
},
    ],
  }

  const days = [
    "sunday",
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
  ]

  const today = days[new Date().getDay()]
  const exercises = workoutPlan[today] || []

  const [doneList, setDoneList] = useState([])
  const [restTime, setRestTime] = useState(0)
  const [weight, setWeight] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)

  const [weightHistory, setWeightHistory] =
    useState(() => {
      const saved =
        localStorage.getItem("weightHistory")
      return saved ? JSON.parse(saved) : []
    })

  useEffect(() => {
    const saved = localStorage.getItem(today)

    if (saved) {
      const parsed = JSON.parse(saved)

      const fixed = exercises.map(
        (exercise, index) => {
          if (
            parsed[index] &&
            parsed[index].length === exercise.sets
          ) {
            return parsed[index]
          }

          return Array(exercise.sets).fill(false)
        }
      )

      setDoneList(fixed)
    } else {
      setDoneList(
        exercises.map((exercise) =>
          Array(exercise.sets).fill(false)
        )
      )
    }
  }, [today])

  useEffect(() => {
    if (doneList.length > 0) {
      localStorage.setItem(
        today,
        JSON.stringify(doneList)
      )
    }
  }, [doneList, today])

  useEffect(() => {
    localStorage.setItem(
      "weightHistory",
      JSON.stringify(weightHistory)
    )
  }, [weightHistory])

  useEffect(() => {
    if (restTime <= 0) return

    const timer = setTimeout(() => {
      setRestTime(restTime - 1)
    }, 1000)

    return () => clearTimeout(timer)
  }, [restTime])

  const toggleSet = (
    exerciseIndex,
    setIndex
  ) => {
    const updated = [...doneList]

    updated[exerciseIndex][setIndex] =
      !updated[exerciseIndex][setIndex]

    setDoneList(updated)

    setRestTime(45)

    const audio = new Audio("/alarm.mp3")

    setTimeout(() => {
      audio.play()
    }, 45000)
  }

  const saveWeight = () => {
    if (!weight) return

    const todayDate =
      new Date().toLocaleDateString()

    const newHistory = [
      {
        date: todayDate,
        weight: Number(weight),
      },
      ...weightHistory,
    ]

    setWeightHistory(newHistory)

    setWeight("")
  }

  const totalSets = exercises.reduce(
    (sum, exercise) => sum + exercise.sets,
    0
  )

  const completedSets =
    doneList.flat().filter(Boolean).length

  const progress =
    totalSets > 0
      ? Math.round(
          (completedSets / totalSets) * 100
        )
      : 0

  return (
    <div
      style={{
        padding: "15px",
        backgroundColor: "#f3f4f6",
        minHeight: "100vh",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "20px",
          maxWidth: "520px",
          margin: "0 auto",
        }}
      >
        <h1 style={{ textAlign: "center" }}>
          오늘의 운동
        </h1>

        <h2
          style={{
            textAlign: "center",
            color: "#2563eb",
          }}
        >
          {today.toUpperCase()}
        </h2>

        <h3 style={{ textAlign: "center" }}>
          진행률 {progress}%
        </h3>

        {restTime > 0 && (
          <div
            style={{
              backgroundColor: "#dbeafe",
              padding: "18px",
              borderRadius: "14px",
              marginBottom: "20px",
              textAlign: "center",
              fontSize: "22px",
              fontWeight: "bold",
            }}
          >
            쉬는시간 {restTime}초
          </div>
        )}

        <div style={{ marginBottom: "30px" }}>
          <h3>오늘 몸무게</h3>

          <div
            style={{
              display: "flex",
              gap: "10px",
            }}
          >
            <input
              type="number"
              placeholder="몸무게 입력"
              value={weight}
              onChange={(e) =>
                setWeight(e.target.value)
              }
              style={{
                flex: 1,
                padding: "14px",
                borderRadius: "10px",
                border: "1px solid #ccc",
                fontSize: "16px",
              }}
            />

            <button
              onClick={saveWeight}
              style={{
                padding: "14px 18px",
                border: "none",
                borderRadius: "10px",
                backgroundColor: "black",
                color: "white",
              }}
            >
              저장
            </button>
          </div>
        </div>

        <div
          style={{
            width: "100%",
            height: "220px",
            marginBottom: "30px",
          }}
        >
          <ResponsiveContainer>
            <LineChart data={weightHistory}>
              <XAxis dataKey="date" />
              <YAxis />
              <Tooltip />
              <Line
                type="monotone"
                dataKey="weight"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {exercises.map(
          (exercise, exerciseIndex) => (
            <div
              key={exerciseIndex}
              style={{
                backgroundColor: "#fff",
                borderRadius: "18px",
                padding: "18px",
                marginBottom: "22px",
                border: "1px solid #ddd",
              }}
            >
              <img
                src={exercise.image}
                alt={exercise.name}
                onClick={() =>
                  setSelectedImage(exercise.image)
                }
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                  borderRadius: "14px",
                  marginBottom: "14px",
                  cursor: "pointer",
                }}
              />

              <h2>{exercise.name}</h2>

              <p>
                {exercise.reps} × {exercise.sets}세트
              </p>

              <div
                style={{
                  display: "flex",
                  flexWrap: "wrap",
                  gap: "10px",
                  marginTop: "12px",
                }}
              >
                {Array.from({
                  length: exercise.sets,
                }).map((_, setIndex) => {
                  const done =
                    doneList[exerciseIndex]?.[
                      setIndex
                    ] || false

                  return (
                    <button
                      key={setIndex}
                      onClick={() =>
                        toggleSet(
                          exerciseIndex,
                          setIndex
                        )
                      }
                      style={{
                        backgroundColor: done
                          ? "green"
                          : "black",
                        color: "white",
                        border: "none",
                        padding: "16px 18px",
                        borderRadius: "12px",
                        fontSize: "15px",
                        minWidth: "110px",
                        cursor: "pointer",
                      }}
                    >
                      {done
                        ? `${setIndex + 1}세트 완료`
                        : `${setIndex + 1}세트`}
                    </button>
                  )
                })}
              </div>
            </div>
          )
        )}

        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0,0,0,0.9)",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex: 9999,
              padding: "20px",
            }}
          >
            <img
              src={selectedImage}
              alt="확대 이미지"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                borderRadius: "16px",
              }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

export default App