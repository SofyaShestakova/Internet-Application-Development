import javax.servlet.RequestDispatcher;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

@WebServlet(
        name = "ControllerServlet",
        urlPatterns = {"/controller"}
)
public class ControllerServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        if (request.getParameter("X") != null &&
            request.getParameter("Y") != null &&
            request.getParameter("R") != null) {
            RequestDispatcher dispatcher = request.getRequestDispatcher("/areacheck");
            dispatcher.forward(request, response);
        } else {
            RequestDispatcher dispatcher = request.getRequestDispatcher("/bad_request.jsp");
            dispatcher.forward(request, response);
        }
    }
}
