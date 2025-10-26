import { Users,Zap,Shield } from "lucide-react"

export const Features=()=>{
    return(
          <section className="container mx-auto px-4 py-20">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="text-center p-6">
                    <Users className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Connect</h3>
                    <p className="text-muted-foreground">
                      Follow people and join conversations that matter to you
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <Zap className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Real-time</h3>
                    <p className="text-muted-foreground">
                      Stay updated with live updates and instant notifications
                    </p>
                  </div>
                  <div className="text-center p-6">
                    <Shield className="w-12 h-12 mx-auto mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Secure</h3>
                    <p className="text-muted-foreground">
                      Your data is protected with industry-standard security
                    </p>
                  </div>
                </div>
              </section>
        
    )
}