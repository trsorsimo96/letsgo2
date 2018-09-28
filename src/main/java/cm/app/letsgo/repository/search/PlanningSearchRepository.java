package cm.app.letsgo.repository.search;

import cm.app.letsgo.domain.Planning;
import org.springframework.data.elasticsearch.repository.ElasticsearchRepository;

/**
 * Spring Data Elasticsearch repository for the Planning entity.
 */
public interface PlanningSearchRepository extends ElasticsearchRepository<Planning, Long> {
}
