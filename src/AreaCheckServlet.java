import javax.servlet.RequestDispatcher;
import javax.servlet.ServletContext;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebInitParam;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;

@WebServlet(
        name = "CheckServlet",
        urlPatterns = {"/areacheck"}
)
public class AreaCheckServlet extends HttpServlet {
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {

        ServletContext context = getServletContext();
        ArrayList<String> al = (ArrayList<String>) context.getAttribute("prevRequests");
        if (al == null)
            al = new ArrayList<>();
        request.setAttribute("prevRequests",al);
        double x;
        double y;
        double r;

        try {
            x = Double.parseDouble(request.getParameter("X"));
            y = Double.parseDouble(request.getParameter("Y"));
            r = Double.parseDouble(request.getParameter("R"));

        } catch (Exception e) {
            RequestDispatcher dispatcher = request.getRequestDispatcher("/bad_request.jsp");
            dispatcher.forward(request, response);
            return;
        }

        if (isCircleArea(x, y, r)   ||
            isTriangleArea(x, y, r) ||
            isRectangleArea(x, y, r)) {
            al.add(x + " "+ y + " " + r + " " + "Попал");
        } else {
            al.add(x + " "+ y + " " + r + " " + "Мимо");
        }
        context.setAttribute("prevRequests",al);

        response.setCharacterEncoding("UTF-8");
        response.setContentType("text/html");
        request.getRequestDispatcher("/table.jsp").forward(request, response);
    }

    private boolean isCircleArea(double x, double y, double r) {
        return (x <= 0 && y >= 0 && (x*x + y*y) <= r/2*r/2);
    }

    private boolean isTriangleArea(double x, double y, double r) {
        return (x >= 0 && y <= 0 && (x-r/2)<=y);
    }

    private boolean isRectangleArea(double x, double y, double r) {
        return (-x <= r && x <= 0 && y <= 0 && -y <= r);
    }
}
